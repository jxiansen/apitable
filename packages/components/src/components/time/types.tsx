

/**
 * dayOfMonth
 * :
 * {type: ["string", "number"], oneOf: [{type: "string", title: "multi days of month"},…],…}
 * dayOfWeek
 * :
 * {type: "string", oneOf: [{type: "string", title: "multi days of week"},…],…}
 * hour
 * :
 * {type: "integer", comment: "hour (0 - 23)"}
 * minute
 * :
 * {type: "integer", comment: "minute (0 - 59)"}
 * month
 * :
 * {type: "integer", comment: "month (1 - 12)"}
 * second
 * :
 * {type: "integer", comment: "second (0 - 59, optional)"}
 *
 * @param interval
 * @param value
 * @param onUpdate
 * @constructor
 */

export interface ICronSchema {
  dayOfMonth?: string; // | number;
  dayOfWeek?: string; // | number;
  hour?: string;
  minute?: string;
  month?: string; //every x month
  second?: string;
}
