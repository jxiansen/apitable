

import { Tooltip } from 'antd';
import classNames from 'classnames';
import * as React from 'react';
import { IIconProps } from '@apitable/icons';
import styles from './style.module.less';

export interface IPreviewToolItem {
  visible?: boolean;
  component?: React.ReactNode | (() => React.ReactNode);
  icon?: React.FC<React.PropsWithChildren<IIconProps>>;
  onClick?: () => void;
  tip?: string | (() => string);
  group?: IPreviewToolItem[];
  className?: string;
  style?: React.CSSProperties;
  divider?: boolean;
}

export const PreviewToolItem: React.FC<React.PropsWithChildren<IPreviewToolItem>> = (props) => {
  const { visible = true, component, tip, group, onClick, style, className, divider, icon } = props;

  if (!visible) {
    return null;
  }

  return (
    <>
      {group && (
        <div
          className={classNames(styles.group, {
            [styles.borderRight]: divider,
          })}
        >
          {group?.map((toolItemProps, index) => <PreviewToolItem key={index} {...toolItemProps} />)}
        </div>
      )}
      {component ? (
        <Tooltip title={typeof tip === 'function' ? tip() : tip} placement="bottom">
          <div className={classNames(styles.componentWrapper, className)} onClick={onClick} style={style}>
            {typeof component === 'function' ? component() : component}
          </div>
        </Tooltip>
      ) : (
        <Tooltip title={typeof tip === 'function' ? tip() : tip} placement="bottom">
          <div className={classNames(styles.componentWrapper, className)} onClick={onClick} style={{ alignItems: 'inherit' }}>
            {icon && React.createElement(icon)}
          </div>
        </Tooltip>
      )}
    </>
  );
};
