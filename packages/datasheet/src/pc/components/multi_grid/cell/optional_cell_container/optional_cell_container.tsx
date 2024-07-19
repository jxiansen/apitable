import classNames from 'classnames';
import * as React from 'react';
import { RowHeightLevel } from '@apitable/core';
import styles from './style.module.less';
interface IOptionalCellContainerProps {
  displayMinWidth: boolean;
  [key: string]: any;
  viewRowHeight?: RowHeightLevel;
  className?: string;
}

export const OptionalCellContainer: React.FC<React.PropsWithChildren<IOptionalCellContainerProps>> = (props) => {
  const { children, className, displayMinWidth, viewRowHeight, ...rest } = props;

  return (
    <div
      className={classNames(
        {
          [styles.optionCellContainer]: true,
          [styles.minWidth]: displayMinWidth,
          [styles.rowHeightHigh]: viewRowHeight && viewRowHeight !== RowHeightLevel.Short,
        },
        className,
        'optionCellContainer',
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
