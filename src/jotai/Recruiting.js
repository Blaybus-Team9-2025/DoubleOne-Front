import { atomWithStorage } from 'jotai/utils';

export const RecruitingInfoAtom = atomWithStorage('recruit', {
  title: '',
  wage: 0,
  amount: 0,
  payType: '',
  seniorSchedules: [
    {
      day: '',
      startTime: '',
      endTime: '',
    },
  ],
  welfares: {
    INSURANCE: [],
    BENEFITS: [],
  },
  workType: '',
  preferGender: '',
  services: {
    MEAL_ASSISTANCE: [],
    TOILETING_ASSISTANCE: [],
    MOBILITY_ASSISTANCE: [],
    DAILY_LIFE_SUPPORT: [],
  },
});
