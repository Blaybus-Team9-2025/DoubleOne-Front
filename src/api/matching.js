import { http } from './http';

// 관리자가 요양사에게 매칭 요청
export const postMatching = async (conditionId, workConditionId) => {
  try {
    const res = await http.post('/matching', {
      conditionId: conditionId,
      workConditionId: workConditionId,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 요양사 매칭 일정 조회 (/schedule)
export const getSchedules = async (workerId) => {
  try {
    const res = await http.get(`/matching/${workerId}/schedules`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 매칭 상태 변경
export const patchMatching = async (
  matchingId,
  matchingStatus,
  runningStatus
) => {
  try {
    const res = await http.patch(`/matching/${matchingId}`, {
      matchingId: matchingId,
      matchingStatus: matchingStatus,
      runningStatus: runningStatus,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 매칭 기록 목록 조회 (/history)
export const getHistory = async (workerId) => {
  try {
    const res = await http.get(`/matching/${workerId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 매칭 현황 조회 (메인홈, 관리자 대시보드)
export const getCurrentMatching = async (memberId) => {
  try {
    const res = await http.get(`/matching/${memberId}/schedules`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 관리자 대시보드
export const getMatchingStat = async (managerId) => {
  try {
    const res = await http.get(`/matching/${managerId}/stat`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
