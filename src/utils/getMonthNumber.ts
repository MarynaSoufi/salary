export const getMonthFromString = (mon: string): number => {
  const currentYear = new Date().getFullYear();
  return new Date(Date.parse(mon + ` 1,${currentYear}`)).getMonth() + 1;
};
