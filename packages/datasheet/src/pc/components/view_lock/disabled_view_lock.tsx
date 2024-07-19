

import { Input } from 'antd';
import { useRef } from 'react';
import * as React from 'react';
import { Button, Message, Typography } from '@apitable/components';
import { CollaCommandName, ExecuteResult, ITemporaryView, Selectors, StoreActions, Strings, t } from '@apitable/core';
import { IViewLockProps } from 'pc/components/view_lock/interface';
import styles from 'pc/components/view_lock/style.module.less';
import { resourceService } from 'pc/resource_service';
import { store } from 'pc/store';
import { useAppSelector } from 'pc/store/react-redux';
import { requestServerView } from '../tab_bar/view_sync_switch/popup_content/request_server_view';

const { TextArea } = Input;

export const DisabledViewLock: React.FC<React.PropsWithChildren<Omit<IViewLockProps, 'unlockHandle'>>> = ({ viewId, onModalClose }) => {
  const areaRef = useRef(null);
  const unitId = useAppSelector((state) => state.user.info?.unitId)!;

  const { datasheetId } = useAppSelector((state) => state.pageParams);

  const isViewModified = useAppSelector((state) => {
    if (!viewId) {
      return false;
    }
    return Selectors.getDatasheetClient(state)?.operateViewIds?.includes?.(viewId);
  });

  const openViewLock = async () => {
    const value = areaRef.current!['resizableTextArea']['textArea']['value'];
    if (isViewModified) {
      const serverViewDate = await requestServerView(datasheetId!, viewId);
      const { result: resultSaveView } = resourceService.instance!.commandManager.execute({
        cmd: CollaCommandName.ManualSaveView,
        viewId,
        viewProperty: serverViewDate as ITemporaryView,
      });
      if (ExecuteResult.Success === resultSaveView) {
        store.dispatch(StoreActions.resetOperateViewId(viewId!, datasheetId!));
      }
    }
    const { result } = resourceService.instance!.commandManager.execute({
      cmd: CollaCommandName.SetViewLockInfo,
      data: value ? { description: value, unitId: unitId } : { unitId: unitId },
      viewId,
    });
    if (ExecuteResult.Success === result) {
      Message.success({
        content: t(Strings.enabled_view_lock_success),
      });
      onModalClose();
    }
  };

  return (
    <div>
      <Typography variant={'body2'}>{t(Strings.enabled_view_lock_tip)}</Typography>
      <TextArea
        placeholder={t(Strings.view_lock_desc_placeholder)}
        autoSize={{ minRows: 1, maxRows: 6 }}
        className={styles.rcTextArea}
        ref={areaRef}
      />
      <div className={styles.buttonGroup}>
        <Button onClick={onModalClose}>{t(Strings.cancel)}</Button>
        <Button color={'primary'} onClick={openViewLock}>
          {t(Strings.lock)}
        </Button>
      </div>
    </div>
  );
};
