import { useMemo, useRef, useImperativeHandle, forwardRef } from 'react';
import * as React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, Align } from 'react-window';
import { Selectors, IViewProperty } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { Row } from './row';
import style from './style.module.less';

interface IRecordListProps {
  datasheetId: string;
  selectedRecordIds?: string[] | null;
  rows: { recordId: string }[];
  view: IViewProperty;
  focusIndex: number;
  foreignDatasheetReadable: boolean;
  onClick?: (recordId: string) => void;
  selectable?: boolean;
}

const RecordListBase: React.ForwardRefRenderFunction<{}, IRecordListProps> = (props, ref) => {
  const {
    datasheetId,
    selectedRecordIds,
    rows,
    view,
    selectable = true,
    focusIndex,
    onClick,
    foreignDatasheetReadable: _foreignDatasheetReadable,
  } = props;
  const formId = useAppSelector((state) => state.pageParams.formId);
  const foreignDatasheetReadable = Boolean(_foreignDatasheetReadable || formId);
  const fieldMap = useAppSelector((state) => Selectors.getFieldMap(state, datasheetId))!;
  const listRef = useRef<List>(null);
  const selectedSet = useMemo(() => {
    return new Set(selectedRecordIds);
  }, [selectedRecordIds]);

  useImperativeHandle(ref, () => ({
    scrollTo(scrollOffset: number) {
      listRef.current && listRef.current.scrollTo(scrollOffset);
    },
    scrollToItem(index: number, align?: Align) {
      listRef.current && listRef.current.scrollToItem(index, align);
    },
  }));

  const itemData = {
    fieldMap,
    view,
    selectable,
    selectedSet,
    rows,
    onClick,
    datasheetId,
    focusIndex,
  };

  return (
    <div className={style.recordListContainer}>
      <AutoSizer style={{ width: '100%', height: '100%' }}>
        {({ height, width }) => {
          return (
            <List
              height={height}
              width={width}
              itemCount={rows.length}
              itemSize={foreignDatasheetReadable ? 98 : 48}
              ref={listRef}
              itemKey={(index: number) => rows[index].recordId}
              itemData={itemData}
            >
              {Row}
            </List>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export const RecordList = React.memo(forwardRef(RecordListBase));
