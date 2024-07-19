import { Space } from 'antd';
import { FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Skeleton } from '@apitable/components';
import { DATASHEET_ID /* , Selectors, ViewType */ } from '@apitable/core';
import { Tab } from './tab';
import styles from './style.module.less';
// import { useAppSelector } from 'react-redux';

export const TabBar: FC<React.PropsWithChildren<{ loading: boolean }>> = ({ loading }) => {
  // const currentView = useAppSelector(Selectors.getCurrentView)!;
  return (
    <div className={styles.tabBarWrapper} id={DATASHEET_ID.VIEW_TAB_BAR}>
      {loading ? (
        <Space style={{ margin: '8px 20px' }}>
          <Skeleton style={{ height: 24, width: 340, marginTop: 0 }} />
        </Space>
      ) : (
        <AutoSizer style={{ width: '100%', height: '100%' }}>{({ width }) => <Tab width={width} />}</AutoSizer>
      )}
    </div>
  );
};
