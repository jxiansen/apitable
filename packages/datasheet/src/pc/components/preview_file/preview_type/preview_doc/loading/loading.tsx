import { Spin } from 'antd';
import { FC } from 'react';
import { LoadingOutlined } from '@apitable/icons';
import styles from './style.module.less';

export interface ILoadingProps {
  tip?: string;
}

export const Loading: FC<React.PropsWithChildren<ILoadingProps>> = (props) => {
  const { tip } = props;

  return (
    <div className={styles.loading}>
      <Spin tip={tip} indicator={<LoadingOutlined size={24} className="circle-loading" />} />
    </div>
  );
};
