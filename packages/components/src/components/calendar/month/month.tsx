

import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import { MonthListDiv } from './styled';
import { getLevels, getPanelData } from '../utils';
import { FORMAT, SPACE, SPACE_MOBILE, DEFAULT_LIST_HEIGHT, DEFAULT_MOBILE_LIST_HEIGHT, MAX_LEVEL } from '../constants';
import debounce from 'lodash/debounce';
import { useResize } from '../hooks/useResize';
import chunk from 'lodash/chunk';
import format from 'date-fns/format';
import { ICalendar } from '../interface';
import { CalendarContext } from '../calendar_context';
import { Week } from './week';

export type IMonth = Omit<ICalendar, 'defaultDate'> & {
  step: number
  isMobile: boolean;
};

const MonthBase:FC<React.PropsWithChildren<IMonth>> = props => {
  const {
    isMobile, step, tasks = [], update, dnd = [], listStyle, startListStyle,
    warnText, rowMixCount = 3, disabled, resizable, moreText, moveTaskId
  } = props;
  const { data, year, month } = useMemo(() =>
    getPanelData(step),
  [step]);
  const space = isMobile ? SPACE_MOBILE : SPACE;
  const defaultListHeight = isMobile ? DEFAULT_MOBILE_LIST_HEIGHT : DEFAULT_LIST_HEIGHT;
  const today = format(new Date(), FORMAT);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [Drag, Drop] = dnd;
  const weeks = chunk(data, 7);
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number[]>([]);
  const [calendarWidth, setCalendarWidth] = useState<number>(0);
  const [calendarHeights, setCalendarHeights] = useState({
    clientHeight: 0,
    scrollHeight: 0,
  });
  const handleResize = debounce(() => {
    setCalendarWidth(calendarRef.current?.offsetWidth || 0);
    setCalendarHeights({
      clientHeight: calendarRef.current?.clientHeight || 0,
      scrollHeight: calendarRef.current?.scrollHeight || 0,
    });
  }, 200);
  useEffect(() => {
    setCalendarWidth(calendarRef.current?.offsetWidth || 0);
    setCalendarHeights({
      clientHeight: calendarRef.current?.clientHeight || 0,
      scrollHeight: calendarRef.current?.scrollHeight || 0,
    });
    const monthElm = document.querySelector('.months');
    if (monthElm && monthElm.scrollTop) {
      monthElm.scrollTop = 0;
    }
  }, [step]);
  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    return () => {
      window.removeEventListener('resize', handleResize, false);
    };
  // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setWidth(calendarWidth / 7);
    const rows = calendarRef.current?.querySelectorAll('.week-row');
    const rowHeights: number[] = [];
    rows?.forEach(row => {
      rowHeights.push(row.scrollHeight);
    });
    setHeight(rowHeights);

  }, [step, calendarWidth]);
  const[resizeDay, setResizeDay] = useState(0);
  const { onResizeStart, resizeData } = useResize({ height, width, update, setResizeDay, tasks });
  const { clientHeight, scrollHeight } = calendarHeights;
  const disableResize = disabled || !resizable || !update;

  const listHeight = listStyle?.height ? parseInt(listStyle?.height as string) : defaultListHeight;

  const resizeMsg = resizeDay ? {
    id: resizeData?.id,
    day: resizeDay,
    direction: resizeData?.direction!,
  } : undefined;

  return (
    <CalendarContext.Provider value={{
      space, listHeight, defaultListHeight, disabled, disableResize, listStyle, startListStyle,
      warnText, onResizeStart, Drag, Drop, update, month, rowMixCount, today, year, isMobile, moreText,
      moveTaskId,
    }}>
      <MonthListDiv ref={calendarRef} className="months" isMobile={isMobile} >
        {weeks.length > 0 && weeks.map((week, weekIdx) => {
          const levels = getLevels({ week, year, tasks, resizeMsg });
          const rowLevel = Math.max(Math.min(levels.length, MAX_LEVEL), rowMixCount);
          let rowHeight = rowLevel * (listHeight + space) + defaultListHeight + 4 + 22;
          // Adaptive height when height is insufficient
          if (levels.length === 0 || (clientHeight <= scrollHeight && (clientHeight / weeks.length) > rowHeight)) {
            rowHeight = clientHeight / weeks.length;
          }
          return (
            <Week
              key={weekIdx}
              week={week}
              weekLevel={weekIdx}
              levelTasks={levels}
              rowHeight={rowHeight}
            />
          );
        })}
      </MonthListDiv>
    </CalendarContext.Provider>
  );
};

export const Month = memo(MonthBase);