// condition 기본 타입
export const recruitType = {
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
};

export const seniorType = {
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
};

export const managerType = {
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
};

// 매칭된 요양사 확인
export const contactListType = {
  seniorName: '',
  seniorAddress: '',
  age: 0,
  profileImg: '',
  workers: [
    {
      workerId: 0,
      workerName: '',
      workerRegions: [
        {
          city: '',
          district: '',
          neighborhood: '',
        },
      ],
      workPeriods: [
        {
          title: '',
          organization: '',
          startDate: '',
          endDate: '',
          current: false,
        },
      ],
      requestMatching: false,
    },
  ],
};
