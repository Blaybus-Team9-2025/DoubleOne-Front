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
      workerConditionId: 0,
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

// 요양사 회원가입 정보
export const workerInfoType = {
  workerId: 0,
  name: '',
  gender: '',
  phoneNum: '',
  hasTrained: false,
  hasVehicle: false,
  address: '',
  zipcode: '',
  detailAddress: '',
};

export const workerConditionInfoType = {
  workerId: 0,
  name: '',
  gender: '',
  phoneNum: '',
  hasTrained: true,
  hasVehicle: false,
  discuss: true,
  address: '',
  introduction: '',
  memberId: 0,
  password: '0',
  wageType: '',
  wage: 0,
  workerLicenses: [
    {
      licenseType: '',
      licenseNum: '',
    },
  ],
  workerRegions: [
    {
      city: '',
      district: '',
      neighborhood: '',
    },
  ],
  workerSchedules: [
    {
      day: '',
      startTime: '',
      endTime: '',
    },
  ],
  services: {
    MEAL_ASSISTANCE: [''],
    DAILY_LIFE_SUPPORT: [''],
    MOBILITY_ASSISTANCE: [''],
    TOILETING_ASSISTANCE: [''],
  },
};
