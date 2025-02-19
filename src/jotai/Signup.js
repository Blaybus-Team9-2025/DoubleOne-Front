import { atomWithStorage } from 'jotai';

// 이메일 + 개인
export const EmailWorkerSignupAtom = atomWithStorage({
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
  gender: 'F',
  birthDate: '',
  phoneNum: '',
  address: '',
  detailAddress: '',
  zipcode: '',
});

// 이메일 + 기업
export const EmailManagerSignupAtom = atomWithStorage({
  name: '',
  email: '',
  gender: 'M',
  birthDate: '',
  password: '',
  confirmPassword: '',
  phoneNum: '',
  centerName: '',
  address: '',
  detailAddress: '',
  zipcode: '',
  hasTruck: false,
  centerGrade: '',
  centerPeriod: '',
});

// 카카오 + 개인
export const KakaoWorkerSignupAtom = atomWithStorage({
  memberId: 0,
  name: '',
  gender: 'F',
  birthDate: '',
  phoneNum: '',
  address: '',
  detailAddress: '',
  zipcode: '',
});

// 카카오 + 기업
export const KakaoManagerSignupAtom = atomWithStorage({
  memberId: 0,
  name: '',
  phoneNum: '',
  centerName: '',
  address: '',
  detailAddress: '',
  zipcode: '',
  hasTruck: false,
  centerGrade: '',
  centerPeriod: '',
});
