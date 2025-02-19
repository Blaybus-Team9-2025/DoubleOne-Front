import { http } from './http';

// 이메일 + 개인 회원가입
export const emailWorkerSignup = async (data) => {
  try {
    console.log('data', data);
    const res = await http.post('/signup/workers', data);
    console.log('res', res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 이메일 + 기업 회원가입
export const emailManagerSignup = async (data) => {
  try {
    console.log('data', data);
    const res = await http.post('/signup/managers', data);
    console.log('res', res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 카카오 + 개인 회원가입
export const kakaoWorkerSignup = async (data) => {
  try {
    console.log('data', data);
    const res = await http.post('/signup/workers/kakao', data);
    console.log('res', res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 카카오 + 기업 회원가입
export const kakaoManagerSignup = async (data) => {
  try {
    console.log('data', data);
    const res = await http.post('/signup/managers/kakao', data);
    console.log('res', res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 이메일로 인증 번호 전송
export const sendEmail = async (data) => {
  try {
    console.log('data', data);
    const res = await http.post('/email/send', data);
    console.log('res', res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 이메일 + 인증 번호 검증
export const verifyEmailCode = async (data) => {
  try {
    console.log('data', data);
    const res = await http.post('/email/verify', data);
    console.log('res', res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 센터 이름 확인
export const getCenterNames = async (keyword) => {
  try {
    const res = await http.get('/center', { params: { keyword } });
    console.log('res', res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
