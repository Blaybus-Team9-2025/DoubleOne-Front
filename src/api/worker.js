import { http } from './http';

// 요양사 희망 근무 조건 등록
export const postWorkerConditions = async (workerId, data) => {
  try {
    const res = await http.post(`/workers/${workerId}/workerConditions`, data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 요양사 기본 정보 편집
export const EditWorkerInfo = async (workerId, data) => {
  try {
    const res = await http.patch(`/workers/${workerId}`, data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 요양사 희망 근무 조건 조회
export const getWorkerConditions = async (workerId, workerConditonId) => {
  try {
    const res = await http.get(
      `/workers/${workerId}/workerConditons/${workerConditonId}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 요양사 희망 근무 조건 편집
export const editWorkerConditions = async (workerId, workerConditonId) => {
  try {
    const res = await http.patch(
      `/workers/${workerId}/workerConditons/${workerConditonId}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 요양사 정보 매칭 요청 및 알림 목록 조회
export const getWorkerRequests = async (workerId) => {
  try {
    const res = await http.patch(`/workers/${workerId}/myPage`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 요양사 정보 조회(회원가입 정보)
export const getWorkerInfo = async (workerId) => {
  try {
    const res = await http.get(`/workers/${workerId}/getWorker`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 요양사 상세 정보 조회
export const getWorkerDetail = async (workerConditionId) => {
  try {
    const res = await http.get(`/workers/${workerConditionId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
