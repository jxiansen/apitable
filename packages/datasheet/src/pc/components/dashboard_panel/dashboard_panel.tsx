

import { Skeleton } from '@apitable/components';
import { Selectors, StatusCode } from '@apitable/core';
import 'react-grid-layout/css/styles.css';
import { useAppSelector } from 'pc/store/react-redux';
import { ServerError } from '../invalid_page/server_error';
import { NoPermission } from '../no_permission';
import { Dashboard } from './dashboard';
import styles from './style.module.less';

export const DashboardPanel = () => {
  const loading = useAppSelector((state) => Boolean(Selectors.getDashboardLoading(state)));
  const dashboardErrCode = useAppSelector(Selectors.getDashboardErrCode);
  const dashboardPack = useAppSelector(Selectors.getDashboardPack);

  const isNoPermission =
    dashboardErrCode === StatusCode.NODE_NOT_EXIST || dashboardErrCode === StatusCode.NOT_PERMISSION || dashboardErrCode === StatusCode.NODE_DELETED;

  if (loading || !dashboardPack) {
    return (
      <div className={styles.skeletonWrapper}>
        <Skeleton height="24px" />
        <Skeleton count={2} style={{ marginTop: '24px' }} height="80px" />
      </div>
    );
  }

  return <>{!dashboardErrCode ? <Dashboard /> : isNoPermission ? <NoPermission /> : <ServerError />}</>;
};
