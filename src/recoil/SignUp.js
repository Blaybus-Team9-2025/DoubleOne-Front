import { atom } from 'recoil';

export const SignUpInfoAtom = atom({
  key: 'SignUpInfoAtom',
  default: {
    name: '',
  },
});
