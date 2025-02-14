import { http } from './http';

const REDIRECT_URI = 'https://oauth/kakao/callback';
const CLIENT_ID = `${import.meta.env.VITE_REACT_APP_KAKAO_REST_API_KEY}`;

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export const sendCode = async (code) => {
  try {
    const res = await http.post('/kakao/login', {
      code,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
