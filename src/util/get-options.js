export const getOptions = (type) => {
  switch (type) {
    case 'meal':
      return [
        { '스스로 식사 가능': 'INDEPENDENT' },
        { '죽, 반찬 등 조리 필요': 'SOFT_DIET' },
        { '식사 차려드리기': 'MEAL_PREP' },
        { '경관식 보조': 'TUBE_FEEDING' },
      ];
    case 'toileting':
      return [
        { '스스로 배변 가능': 'INDEPENDENT' },
        { '기저귀 케어 필요': 'DIAPER_CARE' },
        { '가끔 대소변 실수 시 도움': 'OCCASIONAL_HELP' },
        { '유치도뇨/방광루/장루 관리': 'CATHETER_CARE' },
      ];
    case 'mobility':
      return [
        { '스스로 거동 가능': 'INDEPENDENT' },
        { '휠체어 이동 보조': 'WHEELCHAIR_AID' },
        { '이동시 부축 도움': 'SUPPORT_WALKING' },
        { '거동 불가': 'IMMOBILE' },
      ];
    case 'daily':
      return [
        { '청소, 빨래 보조': 'CLEANING' },
        { '산책, 간단한 운동': 'LIGHT_EXERCISE' },
        { '목욕 보조': 'BATHING_AID' },
        { '말벗 등 정서지원': 'COMPANIONSHIP' },
        { '병원 동행': 'HOSPITAL_VISIT' },
        { '인지자극 활동': 'COGNITIVE_STIMULATION' },
      ];
    case 'benefits':
      return [
        { '퇴직 급여': 'RETIREMENT_ALLOWANCE' },
        { 명절선물: 'HOLIDAY_GIFT' },
        { '장기근속 장려금': 'LONG_SERVICE_BONUS' },
        { 중증가산수당: 'DISABILITY_BONUS' },
        { '교통비 지원': 'TRANSPORT_SUPPORT' },
        { 경조사비: 'CONDOLENCE_SUPPORT' },
        { '식사(비) 지원': 'MEAL_SUPPORT' },
        { 정부지원금: 'GOVERNMENT_AID' },
        { 운전수당: 'DRIVING_ALLOWANCE' },
      ];
    case 'insurance':
      return [
        { 국민연금: 'NATIONAL_PENSION' },
        { 건강보험: 'HEALTH_INSURANCE' },
        { 고용보험: 'EMPLOYMENT_INSURANCE' },
        { 산재보험: 'INDUSTRIAL_INSURANCE' },
      ];
    case 'dementia':
      return [
        '정상(치매증상 없음)',
        '했던 말을 반복하는 등 단기 기억 장애',
        '길을 잃거나 자주 가던 곳을 헤맴',
        '어린아이 같은 행동',
        '집 밖을 배회',
        '가족을 알아보지 못함',
        '사람을 의심하는 망상',
        '때리거나 욕설 등 공격적인 행동',
      ];
    case 'cohabitation':
      return [
        { 독거: 'ALONE_HOME' },
        { '배우자와 동거, 돌봄 시간 중 집에 있음': 'SPOUSE_HOME' },
        { '배우자와 동거, 돌봄 시간 중 자리 비움': 'SPOUSE_AWAY' },
        { '다른 가족과 동거, 돌봄 시간 중 집에 있음': 'FAMILY_HOME' },
        { '다른 가족과 동거, 돌봄 시간 중 자리 비움': 'FAMILY_AWAY' },
      ];
    case 'license':
      return [
        { '요양보호사(필수) 1급': 'CAREGIVER' },
        { '사회복지사 1급': 'SOCIAL_WORKER_1' },
        { '사회복지사 2급': 'SOCIAL_WORKER_2' },
        { '간호지원사 1급': 'NURSE_ASSISTANT_1' },
        { '간호지원사 2급': 'NURSE_ASSISTANT_2' },
      ];
    case 'caringGrade':
      return [
        { '등급 없음': 'NO_GRADE' },
        { '1급': 'LEVEL_1' },
        { '2급': 'LEVEL_2' },
        { '3급': 'LEVEL_3' },
        { '4급': 'LEVEL_4' },
        { '5급': 'LEVEL_5' },
        { 인지지원등급: 'SUPPORT' },
      ];
    case 'wageType':
      return [
        { 시급: 'HOURLY' },
        { 일급: 'DAILY' },
        { 월급: 'MONTHLY' },
        { 연봉: 'YEARLY' },
        { 건당: 'PER_TASK' },
      ];
    case 'weekday':
      return [
        { 월: 'MON' },
        { 화: 'TUE' },
        { 수: 'WED' },
        { 목: 'THU' },
        { 금: 'FRI' },
        { 토: 'SAT' },
        { 일: 'SUN' },
      ];
    case 'workType':
      return [
        { 방문요양: 'HOME_CARE' },
        { 입주요양: 'LIVE_IN' },
        { 방문목욕: 'BATH' },
        { 주야간보호: 'DAY_CARE' },
        { 요양원: 'FACILITY' },
        { 병원동행: 'HOSPITAL' },
      ];
  }
};
