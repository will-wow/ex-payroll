/**
 * @typedef {[number, number, number]} WorkDay
 */

/**
 * @param {WorkDay} workDay
 */
export const toPayHours = ([straightTime, overTime, doubleTime]) =>
  straightTime + overTime * 1.5 + doubleTime * 2;
