/**
 * @typedef {[number, number]} WorkDay
 */

/**
 * @param {WorkDay} workDay
 */
const toPayHours = workDay => {
  const [straightTime, overTime] = workDay;

  return straightTime + overTime * 1.5;
};
