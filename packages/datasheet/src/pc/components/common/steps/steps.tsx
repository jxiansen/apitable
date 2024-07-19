

import classnames from 'classnames';
import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { CheckOutlined } from '@apitable/icons';
import styles from './styles.module.less';

export interface IStepsProps {
  current: number;
  steps: IStepItem[];
  onChange: (current: number) => void;
}

export interface IStepItem {
  title: string;
  onClick?: (item: IStepItem, index: number) => void;
}

export const Steps: React.FC<React.PropsWithChildren<IStepsProps>> = ({ current, steps }) => {
  const colors = useThemeColors();
  const stepItem = (item: IStepItem, index: number) => {
    const isFinish = current > index;
    return (
      <div key={item.title} className={classnames(styles.stepItem, current === index && styles.stepItemActive, isFinish && styles.stepItemFinish)}>
        <div className={styles.stepItemIcon} onClick={() => item?.onClick?.(item, index)}>
          {isFinish ? <CheckOutlined color={colors.staticWhite0} size={16} /> : index + 1}
        </div>
        <div className={styles.stepItemContent}>
          <div className={styles.stepItemTitle}>{item.title}</div>
        </div>
      </div>
    );
  };

  return <div className={styles.steps}>{steps.map((v, index) => stepItem(v, index))}</div>;
};
