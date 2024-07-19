export const sleep: Function = (ms?: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * randomly get a number in an interval
 *
 * @param minNum
 * @param maxNum
 */
export const randomNum = (minNum: number, maxNum: number): number => {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
