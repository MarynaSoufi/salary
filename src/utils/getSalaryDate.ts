import moment from 'moment';

export const getSalaryDate = (numberOfTheMounth: number): string => {
  const currentYear = new Date().getFullYear();
  const endOfMonth = moment()
    .year(currentYear)
    .month(numberOfTheMounth - 1)
    .endOf('month');

  const day = moment()
    .year(currentYear)
    .month(numberOfTheMounth - 1)
    .endOf('month')
    .weekday();

  const lastWeekday = moment()
    .year(currentYear)
    .month(numberOfTheMounth - 1)
    .endOf('month')
    .day(day >= 5 ? 5 : -2)
    .format('l');

  const isWeekend = day === 6 || day === 7;

  return isWeekend ? lastWeekday : endOfMonth.format('l');
};
