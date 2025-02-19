import { atomWithStorage } from 'jotai/utils';

// 요양 보호사 희망 근무 조건
export const CareworkerConditionsAtom = atomWithStorage({
  wageType: 'HOURLY',
  wage: null,
  discuss: false,
  introduce: '',
  hasTrained: false,
  hasVehicle: false,
  services: {
    MEAL_ASSISTANCE: [],
    TOILETING_ASSISTANCE: [],
    MOBILITY_ASSISTANCE: [],
    DAILY_LIFE_SUPPORT: [],
  },
  workPeriods: [
    {
      title: '',
      organization: '',
      startDate: '',
      endDate: '',
      current: false,
    },
  ],
  licenseDtoList: [
    {
      licenseType: '',
      licenseNum: '',
    },
  ],
  scheduleDtoList: [
    {
      day: '',
      startTime: '',
      endTime: '',
    },
  ],
  regionDtoList: [
    {
      city: '',
      district: '',
      neighborhood: '',
    },
  ],
});
