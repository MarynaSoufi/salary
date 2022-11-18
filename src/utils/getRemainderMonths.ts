import * as moment from 'moment';

export const getRemainderMonths = ():string[] => {
  const month = new Date().getMonth();
  const months = moment.months();
  const remaining = months.slice(month);
  return remaining;
};
