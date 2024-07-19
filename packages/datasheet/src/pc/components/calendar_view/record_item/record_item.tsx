

import cls from 'classnames';
import { isNil } from 'lodash';
import { FC, memo, useContext } from 'react';
import { ICalendarViewColumn, t, Strings } from '@apitable/core';
import { FieldTitle } from 'pc/components/expand_record/field_editor';
import { CellValue } from 'pc/components/multi_grid/cell/cell_value';
import { CalendarContext } from '../calendar_context';
import styles from './styles.module.less';

interface IRecordItem {
  id: string;
  column: ICalendarViewColumn;
}

const RecordItemBase: FC<React.PropsWithChildren<IRecordItem>> = (props) => {
  const { id, column } = props;
  const { fieldMap, firstFieldId, getCellValue, calendarStyle, datasheetId } = useContext(CalendarContext);
  const { isColNameVisible } = calendarStyle;
  const field = fieldMap[column.fieldId];
  const cellValue = getCellValue(id, field && field.id);
  const isFirst = firstFieldId === column.fieldId;
  if (isFirst && !cellValue) {
    return <div className={styles.empty}>{t(Strings.record_unnamed)}</div>;
  }
  if (isNil(cellValue)) return null;
  return (
    <div
      key={column.fieldId}
      className={cls(styles.recordItem, {
        [styles.bolder]: isFirst,
        [styles.high]: !isFirst && isColNameVisible,
      })}
    >
      {calendarStyle.isColNameVisible && !isFirst && <FieldTitle fieldId={column.fieldId} datasheetId={datasheetId} />}
      <CellValue recordId={id} field={field} cellValue={cellValue} readonly />
    </div>
  );
};

export const RecordItem = memo(RecordItemBase);
