import { Space } from 'antd';
import { FC, SetStateAction, Dispatch } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Skeleton } from '@apitable/components';
import { FormTab } from './form_tab';
import styles from './style.module.less';

export const TabBar: FC<
  React.PropsWithChildren<{
    loading: boolean;
    setPreFill: Dispatch<SetStateAction<boolean>>;
    preFill: boolean;
  }>
> = ({ loading, setPreFill, preFill }) => {
  return (
    <div className={styles.tabBarWrapper}>
      {loading ? (
        <Space style={{ margin: '8px 20px' }}>
          <Skeleton style={{ height: 24, width: 340, marginTop: 0 }} />
        </Space>
      ) : (
        <AutoSizer style={{ width: '100%', height: '100%' }}>{() => <FormTab setPreFill={setPreFill} preFill={preFill} />}</AutoSizer>
      )}
    </div>
  );
};
