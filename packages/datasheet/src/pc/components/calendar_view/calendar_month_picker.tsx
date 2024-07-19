import { useClickAway } from 'ahooks';
import dayjs from 'dayjs';
import { get } from 'lodash';
import { useState } from 'react';
import { getLanguage } from '@apitable/core';
import { ComponentDisplay, ScreenSize } from '../common/component_display';
import MonthPicker from '../editors/date_time_editor/date_picker/month_picker';
import { PickerContent } from '../editors/date_time_editor/mobile/picker_content';
import { FORMAT_DATE } from './constants';
import { formatString2Date } from './utils';
interface ICalendarMonthPicker {
  showValue: string;
  setDate: (date: dayjs.Dayjs | null) => void;
}

export const CalendarMonthPicker = (props: ICalendarMonthPicker) => {
  const { showValue, setDate } = props;
  const lang = getLanguage().split('-')[0];
  const isZh = lang === 'zh';
  const format = isZh ? 'YYYY年MM月' : 'YYYY MM';

  const [open, setOpen] = useState(false);

  useClickAway(
    (event) => {
      const targetCls = get(event, 'target.className');
      if (targetCls && typeof targetCls === 'string' && (targetCls as string).includes('cp-calendar')) {
        return;
      }
      setOpen(false);
    },
    () => document.querySelector('.cp-calendar'),
  );

  return (
    <>
      <ComponentDisplay minWidthCompatible={ScreenSize.md}>
        <MonthPicker
          format={FORMAT_DATE}
          prefixCls="cp-calendar"
          showDateInput={false}
          align={{
            offset: [-8, 31],
          }}
          value={dayjs.tz(formatString2Date(showValue))}
          onChange={(val) => {
            setDate(val);
            setOpen(!open);
          }}
          open={open}
          readOnly
          inputDateValue={showValue}
          onOpenChange={() => {
            setOpen(!open);
          }}
        />
      </ComponentDisplay>
      <ComponentDisplay maxWidthCompatible={ScreenSize.md}>
        <PickerContent
          value={new Date(formatString2Date(showValue))}
          mode="month"
          editable
          visible={open}
          onChange={(val) => {
            setDate(dayjs.tz(val));
            setOpen(!open);
          }}
          dateFormat={FORMAT_DATE}
          dateTimeFormat={format}
          setVisible={setOpen}
        />
      </ComponentDisplay>
    </>
  );
};
