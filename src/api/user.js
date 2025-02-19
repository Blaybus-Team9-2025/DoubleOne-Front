import { http } from './http';

const REDIRECT_URI = `${import.meta.env.VITE_REACT_APP_KAKAO_REDIRECT_URI}`;
const CLIENT_ID = `${import.meta.env.VITE_REACT_APP_KAKAO_REST_API_KEY}`;

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export const sendCode = async (code) => {
  try {
    const res = await http.post('/login/token', {
      code,
      redirectUri: `${import.meta.env.VITE_REACT_APP_KAKAO_REDIRECT_URI}`,
    });
    console.log('code', code);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const EmailLogin = async (data) => {
  try {
    const res = await http.post('/login', {
      data,
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};
