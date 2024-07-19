

import dayjs from 'dayjs';
import type { IDateTimeField, ITimestamp } from 'types/field_types';
import duration from 'dayjs/plugin/duration';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { getTimeZoneOffsetByUtc, getTimeZone } from '../../config';
import moment from 'moment-timezone';

dayjs.extend(duration);
dayjs.extend(customParseFormat);

export function str2timestamp(value: string | null, dateFormat?: string): ITimestamp | null {
  if (!value) {
    return null;
  }
  const dateTime = dayjs(value, dateFormat);

  return dateTime.isValid() ? dateTime.valueOf() : null;
}

/**
 *
 * Returns the number of milliseconds from 13:45 to 00:00
 * @export
 * @param {string} value 12:34
 * @param {IDateTimeField} [_field]
 * @returns
 */
export function str2time(value: string, _field?: IDateTimeField) {
  // const format = (field && field.property.timeFormat) || DateTimeField.defaultTimeFormat;
  // let dateTime = dayjs(value, format);
  // if (!dateTime.isValid()) {
  //   const format2 = format.replace(':', '');
  //   if (format2 !== format) {
  //     dateTime = dayjs(value, format2);
  //   }
  // }

  // if (!dateTime.isValid()) {
  //   return null;
  // }
  const [hh, mm] = value.split(':') as [string, string];
  const hours = parseInt(hh, 10);
  const minutes = parseInt(mm, 10);
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return;
  }
  return dayjs
    .duration({
      hours,
      minutes,
      // seconds: parseInt(s, 10),
      // milliseconds: dateTime.millisecond(),
    })
    .asMilliseconds();
}

export const isDstDate = (date: string, timeZone?: string) => {
  if (!timeZone) return false;
  return moment(date).tz(timeZone).isDST();
};

export const diffTimeZone = (timeZone?: string, isdstDate?: boolean) => {
  if (!timeZone) return 0;
  const tzOffset = getTimeZoneOffsetByUtc(timeZone, isdstDate)!;
  const clientTimeZone = getTimeZone();
  const clientTzOffset = getTimeZoneOffsetByUtc(clientTimeZone, isdstDate)!;
  return dayjs
    .duration({
      hours: clientTzOffset - tzOffset,
    })
    .asMilliseconds();
};
