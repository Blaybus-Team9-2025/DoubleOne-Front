import { http } from './http';

// 근무 조건 등록
export const postCondition = async (seniorId, data) => {
  try {
    console.log(data);
    const res = await http.post(`/managers/conditions/${seniorId}`, data);
    return res;
  } catch (err) {
    console.error(err);
  }
};

// 근무 조건 목록 조회 (공고 목록)
export const getConditions = async (managerId) => {
  try {
    const res = await http.get(`/managers/conditions/${managerId}/filters`);
    return res;
  } catch (err) {
    console.error(err);
  }
};

// 근무 조건 상세 조회
export const getConditionDetail = async (conditionId) => {
  try {
    const res = await http.get(`/managers/conditions/${conditionId}`);
    return res;
  } catch (err) {
    console.error(err);
  }
};
