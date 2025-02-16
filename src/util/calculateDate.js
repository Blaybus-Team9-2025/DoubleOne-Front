export const calculateTotalExperience = (dateList) => {
  return dateList.reduce((total, { startDate, endDate }) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const yearDiff = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();

    const totalMonths = yearDiff * 12 + monthDiff;
    return total + totalMonths;
  }, 0);
};

export const sliceDate = (date) => {
  return date.replace('-', '.').slice(0, 7);
};
