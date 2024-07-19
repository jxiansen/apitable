import { useUnmount } from 'ahooks';
import { Tooltip } from 'antd';
import cls from 'classnames';
import dayjs from 'dayjs';
import { memo, useContext } from 'react';
import * as React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { ITask, useContextMenu } from '@apitable/components';
import { Selectors, Strings, t } from '@apitable/core';
import { Message } from 'pc/components/common';
import { expandRecordIdNavigate } from 'pc/components/expand_record';
import { store } from 'pc/store';
import { CalendarContext } from './calendar_context';
import { RECORD, CALENDAR_RECORD_MENU, FORMAT_DATE } from './constants';
import { RecordItem } from './record_item';
import styles from './styles.module.less';
interface IDrag {
  children: Element | string;
  id: string;
  listStyle?: React.CSSProperties;
  task: ITask;
  disabled?: boolean;
  isMore?: boolean;
}

const DragBase = ({ id, listStyle, task, disabled, isMore }: IDrag) => {
  const { startDate, endDate, title } = task;
  const { columns, currentSearchRecordId, draggable, isCryptoStartField, isCryptoEndField, isMobile, activeCell } = useContext(CalendarContext);

  const { show } = useContextMenu({
    id: CALENDAR_RECORD_MENU,
  });

  useUnmount(() => {
    const state = store.getState();
    const rowsMap = Selectors.getVisibleRowsIndexMap(state);
    const isRecordInView = rowsMap.has(id);
    if (!isRecordInView && activeCell?.recordId === id) {
      Message.warning({
        content: t(Strings.record_filter_tips),
      });
    }
  });

  const onContextMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    show(e, {
      props: {
        recordId: id,
      },
    });
  };
  const [{ opacity }, drag] = useDrag(() => ({
    type: RECORD,
    item: {
      id,
    },
    collect: (monitor: DragSourceMonitor) => ({
      opacity: monitor.isDragging() ? 0.6 : 1,
    }),
  }));

  const isCurrentSearchCell = currentSearchRecordId === id;

  const formatStartDate = startDate ? dayjs.tz(startDate).format(FORMAT_DATE) : '';
  const formatEndDate = endDate ? dayjs.tz(endDate).format(FORMAT_DATE) : '';

  const DragItem = () => {
    const itemArray = (isMobile ? columns.slice(0, 1) : columns).map((column) => <RecordItem key={column.fieldId} column={column} id={id} />);
    // More time, more rows to show date intervals
    if (isMore) {
      itemArray.splice(
        1,
        0,
        <div key="duration" className={styles.duration}>
          {formatStartDate}
          {formatStartDate !== formatEndDate && (
            <>
              <span>{startDate && endDate ? '→' : ''}</span>
              {formatEndDate}
            </>
          )}
        </div>,
      );
    }
    return (
      <>
        <div
          ref={isMobile || disabled || !draggable || isCryptoStartField || isCryptoEndField ? undefined : drag}
          className={cls('list', {
            mobile: isMobile,
            highlight: isCurrentSearchCell,
          })}
          id={`calendar_task_${id}`}
          style={{
            opacity,
            ...listStyle,
          }}
          onContextMenu={isMobile ? undefined : onContextMenu}
          onClick={() => {
            expandRecordIdNavigate(id);
          }}
        >
          {itemArray}
        </div>
      </>
    );
  };

  if (isMobile) {
    return <DragItem key={`drag-${id}`} />;
  }

  return (
    <Tooltip
      title={
        <div className={styles.dragTip}>
          <header>
            <RecordItem column={{ fieldId: title }} id={id} />
          </header>
          <div className={styles.dragTipDate}>
            {formatStartDate}
            {startDate && endDate ? '-' : ''}
            {formatEndDate}
          </div>
        </div>
      }
    >
      <DragItem key={`drag-${id}`} />
    </Tooltip>
  );
};

export const Drag = memo(DragBase);
