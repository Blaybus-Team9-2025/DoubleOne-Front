import { atom } from 'jotai';

export const SeniorInfoAtom = atom({
  managerId: -1,
  name: '',
  gender: '',
  birthDate: '',
  careLevel: '',
  height: 0,
  weight: 0,
  address: '',
  cohabitationStatus: '',
  dementiaSymptoms: [],
  etcDisease: '',
});
