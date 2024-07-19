import * as React from 'react';
import { Selectors } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { OPERATE_WIDTH } from '../field_setting';
import styles from './styles.module.less';

interface IAutoLayoutProps {
  boxWidth: number;
  datasheetId?: string;
}

function showLeftOrRight(positionX: number, boxWidth: number) {
  const windowWidth = document.body.clientWidth;
  if (positionX + OPERATE_WIDTH + boxWidth > windowWidth) {
    return {
      left: -boxWidth - 20,
    };
  }
  return {
    right: -boxWidth - 20,
  };
}

export const AutoLayout: React.FC<React.PropsWithChildren<IAutoLayoutProps>> = (props) => {
  const { fieldRectLeft } = useAppSelector((state) => Selectors.gridViewActiveFieldState(state, props.datasheetId));
  return (
    <div className={styles.autoLayout} style={showLeftOrRight(fieldRectLeft, props.boxWidth)}>
      {props.children}
    </div>
  );
};
