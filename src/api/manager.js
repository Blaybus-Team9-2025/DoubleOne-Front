import { http } from './http';

// 관리자 정보 조회
export const getManagerInfo = async (managerId) => {
  try {
    const res = await http.get(`/managers/${managerId}`);
    return res;
  } catch (err) {
    console.error(err);
  }
};

// 현재 매칭 중인 어르신 목록 조회
export const getMatchingSeniorList = async () => {
  try {
    const res = await http.get('/managers/matching-senior');
    return res;
  } catch (err) {
    console.error(err);
  }
};

// 근무 조건 목록 조회 (매칭 중인 어르신)
export const getManagerConditions = async (managerId) => {
  try {
    const res = await http.get(`/managers/${managerId}/conditions`);
    return res;
  } catch (err) {
    console.error(err);
  }
};
