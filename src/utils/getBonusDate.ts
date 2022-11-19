import moment from 'moment';

export const getBonusDate = (numberOfTheMounth: number): string => {
  const currentYear = new Date().getFullYear();
  const d = moment()
    .year(currentYear)
    .month(numberOfTheMounth - 1)
    .date(15);

  const day = moment()
    .year(currentYear)
    .month(numberOfTheMounth - 1)
    .date(15)
    .weekday();

  const nextWednesday = moment()
    .year(currentYear)
    .month(numberOfTheMounth - 1)
    .date(15)
    .day(10)
    .format('l');

  const isWeekend = day === 6 || day === 7;
  return isWeekend ? nextWednesday : d.format('l');
};
