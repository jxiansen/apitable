

import classNames from 'classnames';
import * as React from 'react';
import { ConfigConstant, Selectors } from '@apitable/core';
import { Emoji } from 'pc/components/common/emoji';
import { store } from 'pc/store';
import styles from '../cell_checkbox/style.module.less';
import { ICellComponentProps } from '../cell_value/interface';

export const CellMultiCheckbox: React.FC<React.PropsWithChildren<ICellComponentProps>> = (props) => {
  const { className, field: propsField, cellValue } = props;
  const field = Selectors.findRealField(store.getState(), propsField);

  if (!field) {
    return null;
  }

  return (
    <div
      className={classNames(className, styles.checkboxCell)}
      style={{
        paddingLeft: 8,
        justifyContent: 'flex-start',
      }}
    >
      {field &&
        (cellValue as boolean[])
          .filter((i) => i)
          .map((_i, index) => (
            <span key={index} style={{ padding: '0 2px' }}>
              <Emoji emoji={field.property.icon} size={ConfigConstant.CELL_EMOJI_SIZE} />
            </span>
          ))}
    </div>
  );
};
