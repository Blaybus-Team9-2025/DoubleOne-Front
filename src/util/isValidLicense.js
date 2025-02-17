export const isValidateLicense = (licenseType, licenseNumber) => {
  const patterns = {
    '요양보호사(필수) 1급': /^\d{4}-\d{7}$/,
    '사회복지사 1급': /^[1-2]-\d{5,6}$/,
    '사회복지사 2급': /^[1-2]-\d{5,6}$/,
    '간호지원사 1급': /^\d{4}-\d{5}$|^\d{6}$/,
    '간호지원사 2급': /^\d{4}-\d{5}$|^\d{6}$/,
  };

  return patterns[licenseType]?.test(licenseNumber) || false;
};
