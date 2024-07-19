

import * as React from 'react';
import { AddOutlined } from '@apitable/icons';
import { appendRow, Direction } from 'modules/shared/shortcut_key/shortcut_actions/append_row';
import { stopPropagation } from 'pc/utils';
import styles from './styles.module.less';

interface IQuickAppendProps {
  left: number;
  top: number;
  length: number;
  hoverRecordId?: string;
}

export const QuickAppend: React.FC<React.PropsWithChildren<IQuickAppendProps>> = React.memo((props) => {
  const { top, left, length, hoverRecordId } = props;

  const addNewRecord = async () => {
    await appendRow({ recordId: hoverRecordId, direction: Direction.Up });
  };
  return (
    <div
      className={styles.quickAppend}
      style={{
        top,
        left,
      }}
      onClick={addNewRecord}
      // This is to prevent constant state changes caused by multi_grid listening
      onMouseOver={stopPropagation}
    >
      <div className={styles.quickAppendToolsWrap}>
        <div className={styles.iconAddWrap}>
          <AddOutlined />
        </div>
        <div
          className={styles.quickAppendLine}
          style={{
            width: `calc(${length + 16}px - 100%)`,
          }}
        />
      </div>
    </div>
  );
});
