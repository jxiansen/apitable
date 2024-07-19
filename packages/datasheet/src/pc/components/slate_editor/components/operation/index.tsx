import cx from 'classnames';
import * as React from 'react';
import { AddOutlined } from '@apitable/icons';
import { IElement } from '../../interface/element';

import styles from './operation.module.less';

export interface IOperationProps {
  element: IElement;
  style?: React.CSSProperties;
  className?: string;
  visible?: boolean;
}

const Operation = ({ visible, style, className }: IOperationProps) => {
  if (!visible) {
    return null;
  }
  return (
    <span contentEditable={false} className={cx(styles.operation, className)} style={style}>
      <AddOutlined />
    </span>
  );
};

export default Operation;
