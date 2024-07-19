

import * as React from 'react';
import { Typography } from '@apitable/components';
import { Selectors, Strings, t } from '@apitable/core';
import { useShowViewLockModal } from 'pc/components/view_lock/use_show_view_lock_modal';
import { useAppSelector } from 'pc/store/react-redux';
import styles from './style.module.less';

export const SyncViewTip: React.FC<React.PropsWithChildren<{ style?: React.CSSProperties; content?: string }>> = ({ style, content }) => {
  const mirrorId = useAppSelector((state) => state.pageParams.mirrorId);
  const { editable } = useAppSelector(Selectors.getPermissions);
  const snapshot = useAppSelector(Selectors.getSnapshot)!;
  const isViewLock = useShowViewLockModal();
  const isViewSync = useAppSelector((state) => {
    if (!state.labs.includes('view_manual_save')) {
      return true;
    }
    const { viewId, datasheetId } = state.pageParams;
    return Selectors.getCurrentViewBase(snapshot, viewId, datasheetId, undefined, Selectors.getMirror(state))?.autoSave;
  });
  let _content = t(Strings.view_sync_property_tip_close_auto_save);
  if (isViewSync && !mirrorId && editable) {
    _content = content || t(Strings.view_sync_property_tip_open_auto_save);
  }
  if (isViewSync && !mirrorId && isViewLock) {
    _content = t(Strings.view_lock_setting_desc);
  }

  return (
    <div className={styles.closeSyncViewTip} style={style}>
      <Typography variant="body4" className={styles.text}>
        {_content}
      </Typography>
    </div>
  );
};
