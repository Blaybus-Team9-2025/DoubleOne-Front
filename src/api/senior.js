import { http } from './http';

// 어르신 정보 목록 조회
export const getSeniorList = async (sort) => {
  try {
    const res = await http.get(`/seniors?sort=${sort}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 어르신 정보 목록 필터 조회
export const getSeniorFilterList = async (type) => {
  try {
    // 확정 전
    const res = await http.get(`/seniors/filter?`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 어르신 정보 등록
export const postSenior = async (data, imgFile) => {
  const formData = new FormData();

  formData.append(
    'data',
    new Blob([JSON.stringify(data)], { type: 'application/json' })
  );

  formData.append('imgFile', imgFile);

  try {
    const res = await http.post('/seniors', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 어르신 정보 상세조회
export const getSeniorDetail = async (seniorId) => {
  try {
    const res = await http.get(`/seniors/${seniorId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 어르신 정보 삭제
export const deleteSenior = async (seniorId) => {
  try {
    const res = await http.delete(`/seniors/${seniorId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 어르신 정보 수정
export const patchSenior = async (seniorId, data, imgFile) => {
  const formData = new FormData();

  formData.append(
    'data',
    new Blob([JSON.stringify(data)], { type: 'application/json' })
  );

  formData.append('imgFile', imgFile);

  try {
    const res = await http.patch(`/seniors/${seniorId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 매칭된 요양사 확인
export const getMatchingWorkers = async (seniorId) => {
  try {
    const res = await http.get(`/seniors/match/${seniorId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
