

import classnames from 'classnames';
import * as React from 'react';
import { Field, FieldType, IField } from '@apitable/core';
import { getFieldHeight, getShowFieldType, getVietualFieldHeight } from 'pc/components/gallery_view/utils';
import { UrlDiscern } from 'pc/components/multi_grid/cell/cell_text/url_discern';
import styles from './style.module.less';

interface ICardTextProps {
  cellValue: string;
  field: IField;
  maxLine: number;
  autoHeight?: boolean;
  isColNameVisible?: boolean;
  isVirtual?: boolean;
}

export const EACH_TEXT_LINE_HEIGHT = 21;

export const CardText: React.FC<React.PropsWithChildren<ICardTextProps>> = ({
  cellValue,
  field,
  maxLine,
  autoHeight,
  isColNameVisible,
  isVirtual,
}) => {
  const isMultiLine = getShowFieldType(field) === FieldType.Text;
  const text = Field.bindModel(field).cellValueToString(cellValue);
  const style: React.CSSProperties = { width: '100%' };
  if (autoHeight) {
    style.height = getVietualFieldHeight(field, maxLine);
    style.marginTop = isColNameVisible ? 4 : 0;
    style.marginBottom = 8;
    style.lineHeight = '21px';
    style.overflow = 'hidden';
  } else {
    const contentHeight = getFieldHeight(field, maxLine);
    style.height = contentHeight + 4 + 12;
    style.paddingTop = 4;
    style.paddingBottom = 12;
  }
  return (
    <div
      className={classnames({
        [styles.multi!]: isMultiLine,
        [styles.single!]: !isMultiLine,
        [styles.isVirtual!]: isVirtual,
      })}
      style={style}
    >
      <UrlDiscern value={text} />
    </div>
  );
};
