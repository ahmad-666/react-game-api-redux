export const getYear = () => new Date().getFullYear();
export const getMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) return `0${month + 1}`;
  return month + 1;
};
export const getDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  return day;
};
