/**
 * robot task running history
 */
export enum RunHistoryStatusEnum {
  // default status is RUNNING
  RUNNING = 0,
  SUCCESS = 1,
  FAILED = 2,
  PENDING = 3,
  // when the number of running tasks exceeds the limit, the status is EXCESS
  EXCESS = 4,
}
