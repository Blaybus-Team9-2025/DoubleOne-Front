import { atomWithStorage } from 'jotai/utils';

export const ManagerInfoAtom = atomWithStorage('manager', {
  profileImg: null,
  name: '',
  email: '',
  gender: '',
  birthDate: '',
  phoneNum: '',
  centerImg: null,
  centerName: '',
  address: '',
  zipcode: '',
  detailAddress: '',
  hasTruck: true,
  centerGrade: '',
  centerPeriod: '',
  centerInfo: null,
  centerMessage: null,
});
