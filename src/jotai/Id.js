import { atomWithStorage } from 'jotai/utils';

export const IdAtom = atomWithStorage('selectedId', {
  id: -1,
});
