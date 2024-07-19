

import * as React from 'react';
import { ILinearRowBlank } from '@apitable/core';
import { GRAY_COLOR_BORDER } from '../cell_group_tab/cell_group_tab';
import { getGroupColor } from '../utils';

interface ICellBlank {
  actualColumnIndex: number;
  style: React.CSSProperties;
  columnsLength: number;
  groupLength: number;
  row: ILinearRowBlank;
  needOffsetBorderBottom?: boolean;
}

export const CellBlank: React.FC<React.PropsWithChildren<ICellBlank>> = (props) => {
  const { style, row, actualColumnIndex, groupLength, needOffsetBorderBottom } = props;
  return (
    <div
      style={{
        ...style,
        background: getGroupColor(groupLength)(row.depth - 1),
        marginLeft: actualColumnIndex === 0 && groupLength - 1 > 0 ? (groupLength - 1) * 16 : 0,
        borderBottom: needOffsetBorderBottom ? GRAY_COLOR_BORDER : '',
      }}
    />
  );
};
