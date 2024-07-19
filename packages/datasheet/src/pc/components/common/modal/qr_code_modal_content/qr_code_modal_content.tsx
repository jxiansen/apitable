import { upperFirst } from 'lodash';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Button } from '@apitable/components';
import { t, Strings } from '@apitable/core';
import { store } from 'pc/store';
import { getEnvVariables } from 'pc/utils/env';
// @ts-ignore
import { ServiceQrCode } from 'enterprise/guide/ui/qr_code';
import styles from './style.module.less';

interface IModalContentProps {
  content: string;
  onOk: () => void | Promise<void>;
  modalButtonType: string;
  okText?: string;
}

enum ModalBottonType {
  Error = 'danger',
  Success = 'success',
  Warning = 'warning',
  Info = 'primary',
}

export const QRCodeModalContent: React.FC<React.PropsWithChildren<IModalContentProps>> = (props) => {
  const { content, onOk, modalButtonType, okText = t(Strings.refresh) } = props;
  return (
    <Provider store={store}>
      <div className={styles.modalContent}>
        <p className={styles.modalContentText}>{content}</p>
        <div className={styles.qrcodeContent}>
          <div className={styles.qrcode}>
            <ServiceQrCode />
          </div>
          <p>
            {t(Strings.encounter_problems)}
            <br />
            {t(Strings.encounter_problems_message)}
          </p>
        </div>
        <div className={styles.modalbutton}>
          <Button color={ModalBottonType[upperFirst(modalButtonType)]} onClick={onOk} size="small">
            {okText}
          </Button>
        </div>
      </div>
    </Provider>
  );
};

export const getModalConfig = (props: any) => {
  const { isShowQrcode = true, title, content, onOk, okText, modalButtonType } = props;
  const qrcodeVisible = !(getEnvVariables().IS_SELFHOST || getEnvVariables().IS_APITABLE);

  if (isShowQrcode && qrcodeVisible) {
    return {
      title,
      content: QRCodeModalContent({
        content,
        onOk,
        okText,
        modalButtonType,
      }),
      footer: null,
      maskClosable: false,
    };
  }
  return {
    ...props,
  };
};
