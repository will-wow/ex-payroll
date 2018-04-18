import R from "ramda";

const WEEK = 7;
const STANDARD_HOURS = 8;
const TIME_AND_A_HALF_HOURS = 4;
const STANDARD_WEEK = STANDARD_HOURS * 5;

export const calculateOvertime = (previousHours, currentHours) => {
  const previousDays = previousHours.length;

  return R.pipe(
    R.map(removeOvertime),
    R.sum,
    calculateHours(previousDays, currentHours)
  )(previousHours);
}

const removeOvertime = hours => {};

const calculateHours = (previousDaysWorked, hours) => previousHoursWorked => {};
