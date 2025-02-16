import { atom } from 'jotai';

export const SignupAtom = atom({
  name: '',
  gender: 'female',
  year: '2000',
  month: 0,
  day: 0,
  centerName: '',
  tel1: '010',
  tel2: '',
  tel3: '',
  zonecode: '',
  address: '',
  detailAdress: '',
});
