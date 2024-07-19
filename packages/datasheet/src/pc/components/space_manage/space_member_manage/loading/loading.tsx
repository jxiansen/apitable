import { Spin } from 'antd';
import * as React from 'react';
import { FC } from 'react';
import { Strings, t } from '@apitable/core';
import { LoadingOutlined } from '@apitable/icons';
import styles from './style.module.less';

interface ILoading {
  style?: React.CSSProperties;
}
export const Loading: FC<React.PropsWithChildren<ILoading>> = ({ style }) => {
  return (
    <div className={styles.loadingWrapper} style={style}>
      <Spin tip={t(Strings.loading)} indicator={<LoadingOutlined size={24} className="circle-loading" />} />
    </div>
  );
};
