import classNames from 'classnames';
import { memo, PropsWithChildren } from 'react';
import * as React from 'react';
import { shallowEqual } from 'react-redux';
import { ListChildComponentProps } from 'react-window';
import { Selectors } from '@apitable/core';
import { RecordCard } from 'pc/components/common';
import { store } from 'pc/store';
import style from './style.module.less';

const RowFunc: React.FC<React.PropsWithChildren<ListChildComponentProps>> = (props) => {
  const { index, data } = props;

  const { rows, datasheetId, selectable, selectedSet, fieldMap, onClick, view, focusIndex } = data;

  const row = rows[index];
  const record = Selectors.getRecord(store.getState(), row.recordId, datasheetId);
  const visibleColumns = Selectors.getVisibleColumnsBase(view);

  if (!record) {
    return null;
  }

  return (
    <div style={{ ...props.style }} key={record.id}>
      <div
        className={classNames({
          [style.selectWrapper]: selectable,
          [style.selected]: selectedSet.has(record.id),
        })}
      >
        <RecordCard
          record={record}
          fieldMap={fieldMap}
          columns={visibleColumns}
          onClick={onClick}
          datasheetId={datasheetId}
          className={classNames({
            [style.mobileCard]: !selectable,
            [style.cardHighlight]: focusIndex === index,
          })}
        />
      </div>
    </div>
  );
};

const areEqual = (
  prevProps: Readonly<PropsWithChildren<ListChildComponentProps>>,
  nextProps: Readonly<PropsWithChildren<ListChildComponentProps>>,
) => {
  const { style: prevStyle, data: prevData, ...prevRest } = prevProps;
  const { style: nextStyle, data: nextData, ...nextRest } = nextProps;
  return shallowEqual(prevStyle, nextStyle) && shallowEqual(prevData, nextData) && shallowEqual(prevRest, nextRest);
};

export const Row = memo(RowFunc, areEqual);
