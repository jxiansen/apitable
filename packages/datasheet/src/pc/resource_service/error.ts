

import * as Sentry from '@sentry/nextjs';
import parser from 'html-react-parser';
import { Navigation, OnOkType, OtErrorCode, StatusCode, Strings, t } from '@apitable/core';
import { IServiceError } from '@apitable/widget-sdk';
import { Message } from 'pc/components/common/message';
import { Modal } from 'pc/components/common/modal/modal/modal';
import { getModalConfig } from 'pc/components/common/modal/qr_code_modal_content';
import { Router } from 'pc/components/route_manager/router';
// @ts-ignore
import { triggerUsageAlertForDatasheet } from 'enterprise/billing/trigger_usage_alert';

export const onError: IServiceError = (error, type) => {
  const { isShowQrcode, title, code, message: errorMessage } = error;
  const errorCode = code as number;
  if (type === 'modal') {
    Sentry.captureMessage(errorMessage, {
      extra: error as any,
    });

    window.parent.postMessage(
      {
        message: 'socketError',
        data: {
          errorCode: code,
          message: errorMessage,
        },
      },
      '*',
    );

    let modalType = error.modalType || 'error';
    let contentMessage = `<span>${errorMessage}(${errorCode})</span>`;
    // TODO: Temporary solutions, forms and tables without permission to insert or edit need to report different errors and
    // different error codes to report errors need different copy
    if (errorCode == StatusCode.NOT_PERMISSION || errorCode == StatusCode.NODE_NOT_EXIST) {
      modalType = 'warning';
      contentMessage =
        /fom\w+/.test(window.location.href) && errorCode == StatusCode.NOT_PERMISSION
          ? t(Strings.no_datasheet_editing_right)
          : `<span>${t(Strings.no_file_permission_message)}(${errorCode})</span>`;
    }
    if (errorCode == OtErrorCode.REVISION_OVER_LIMIT) {
      modalType = 'info';
    }
    const modalOnOk = () => {
      if (modal.destroy()) {
        modal.destroy();
      }
      if (error.onOkType && error.onOkType === OnOkType.BackWorkBench) {
        Router.redirect(Navigation.WORKBENCH);
      } else {
        window.location.reload();
      }
    };

    const modalConfig = getModalConfig({
      title: title || t(Strings.kindly_reminder),
      content: parser(contentMessage),
      okText: error.okText || t(Strings.refresh),
      onOk: modalOnOk,
      maskClosable: false,
      modalButtonType: modalType,
      isShowQrcode,
    });
    const modal = Modal[modalType](modalConfig);
    return;
  }

  if (type === 'message') {
    Message.warning({ content: errorMessage });
    return;
  }

  if (type === 'subscribeUsage' && errorMessage) {
    const { key, specification, usage } = JSON.parse(errorMessage);
    triggerUsageAlertForDatasheet?.(t(Strings[key], { specification, usage }));
    return;
  }
};
