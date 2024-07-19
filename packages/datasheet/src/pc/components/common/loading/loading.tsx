

import { Spin } from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import { FC } from 'react';
import { Strings, t } from '@apitable/core';
import { LoadingOutlined } from '@apitable/icons';
import { useAppSelector } from 'pc/store/react-redux';
import styles from './style.module.less';

export interface ILoadingProps {
  showText?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Loading: FC<React.PropsWithChildren<ILoadingProps>> = (props) => {
  const { showText = true, style, className } = props;
  const shareId = useAppSelector((state) => state.pageParams.shareId);
  return (
    <div
      className={classNames(styles.loading, className)}
      style={{
        top: shareId ? 16 : 0,
        bottom: shareId ? 16 : 0,
        borderRadius: shareId ? 8 : 0,
        ...style,
      }}
    >
      <Spin tip={showText ? t(Strings.loading) : ''} indicator={<LoadingOutlined size={24} className="circle-loading" />} />
    </div>
  );
};
