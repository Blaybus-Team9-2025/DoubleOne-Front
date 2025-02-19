// 월급 계산 함수
export const getMonthlyPay = (unit, amount) => {
  const num = Number(amount);
  if (!amount || isNaN(num)) return 0;

  switch (unit) {
    case 'HOURLY':
      return num * 8 * 22; // 시급 × 8시간 × 22일
    case 'DAILY':
      return num * 22; // 일급 × 22일
    case 'MONTHLY':
      return num; // 월급 그대로 사용
    case 'YEARLY':
      return Math.round(num / 12); // 연봉 ÷ 12
    default:
      return 0; // '건당'은 월급 X
  }
};
