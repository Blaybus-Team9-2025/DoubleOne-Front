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

// 년월일 넣기
export const translateDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
};
