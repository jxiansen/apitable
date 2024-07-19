import { Tooltip } from 'antd';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { IReduxState, IViewProperty, Selectors, Strings, t } from '@apitable/core';
import { LockOutlined } from '@apitable/icons';
import { ViewSyncStatus } from 'pc/components/tab_bar/view_sync_switch';

import { useAppSelector } from 'pc/store/react-redux';

export const ViewLockIcon: React.FC<
  React.PropsWithChildren<{
    viewId: string;
    view: IViewProperty;
  }>
> = ({ view, viewId }) => {
  const colors = useThemeColors();

  const isViewModified = useAppSelector((state) => {
    if (!viewId) {
      return false;
    }
    return Selectors.getDatasheetClient(state)?.operateViewIds?.includes?.(viewId);
  });

  const labs = useAppSelector((state: IReduxState) => state.labs);

  if (isViewModified && labs.includes('view_manual_save') && Boolean(view.lockInfo)) {
    return <ViewSyncStatus viewId={view.id} />;
  }

  if (!view.lockInfo) {
    return <ViewSyncStatus viewId={view.id} />;
  }

  return (
    <Tooltip title={t(Strings.un_lock_view)} placement="bottom">
      <span style={{ marginLeft: 4, display: 'flex', alignItems: 'center' }}>
        <LockOutlined color={colors.primaryColor} />
      </span>
    </Tooltip>
  );
};
