import { atom } from 'jotai';

export const LoginAtom = atom({
  memberId: -1,
  memberType: '',
  workerId: -1,
  managerId: -1,
});
