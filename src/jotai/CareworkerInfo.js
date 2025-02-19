import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// 요양 보호사 희망 근무 조건
export const CareworkerConditionsAtom = atom({
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

// 요양사 개인 정보
export const CareWorkerInfoAtom = atom({
  workerId: -1,
  name: '',
  gender: 'M',
  phoneNum: '',
  hasTrained: false,
  hasVehicle: false,
  address: '',
  zipcode: '',
  detailAddress: '',
  password: '',
  confirmPassword: '',
  imgFile: '',
});

export const workerConditionIdAtom = atomWithStorage('workerConditionId', {
  workerConditionId: -1,
});

export const CareWorkerPeriodsAtom = atomWithStorage('workPeriods', {
  workPeriods: [
    {
      title: '',
      organization: '',
      startDate: '',
      endDate: '',
      current: false,
    },
  ],
});
