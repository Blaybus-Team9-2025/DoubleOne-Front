import { atomWithStorage } from 'jotai/utils';

export const LoginAtom = atomWithStorage('login', {
  memberId: -1,
  memberType: '',
  workerId: -1,
  managerId: -1,
});
