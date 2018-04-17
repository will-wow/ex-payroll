import * as R from "ramda";

const WEEK = 7;
const STANDARD_HOURS = 8;
const TIME_AND_A_HALF_HOURS = 4;
const STANDARD_WEEK = STANDARD_HOURS * 5;

export const calculateOvertime = currentHours => previousHours =>
  R.pipe(
    R.map(removeOvertime),
    R.sum,
    calculateHours(R.length(previousHours), currentHours)
  )(previousHours);

const calculateHours = (previousDaysWorked, hours) => previousHoursWorked => {
  return previousDaysWorked < WEEK - 1
    ? calculateWeekdayHours(hours, previousHoursWorked)
    : calculateSeventhDayHours(hours);
};

const calculateWeekdayHours = (hours, previousHours) => {
  const standardTime = removeOvertime(hours);

  const timeAndAHalf = capUp(hours - standardTime, TIME_AND_A_HALF_HOURS);

  const doubleTime = hours - standardTime - timeAndAHalf;
  const weeklyOvertime = capDown(
    previousHours + standardTime - STANDARD_WEEK,
    0
  );

  return [
    standardTime - weeklyOvertime,
    timeAndAHalf + weeklyOvertime,
    doubleTime
  ];
};

const calculateSeventhDayHours = hours => {
  const timeAndAHalf = removeOvertime(hours);
  const doubleTime = hours - timeAndAHalf;

  return [0, timeAndAHalf, doubleTime];
};

const removeOvertime = hours => capUp(hours, STANDARD_HOURS);

const capUp = (x, max) => (x < max ? x : max);
const capDown = (x, min) => (x > min ? x : min);
