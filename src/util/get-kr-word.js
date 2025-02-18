export const getTypeKr = (type) => {
  switch (type) {
    case 'kakao':
      return '카카오';
    case 'email':
      return '이메일';
    default:
      return null;
  }
};

export const getTargetKr = (target) => {
  switch (target) {
    case 'worker':
      return '개인';
    case 'manager':
      return '기업';
  }
};
