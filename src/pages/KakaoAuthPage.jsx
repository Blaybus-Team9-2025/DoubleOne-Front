import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';

import { sendCode } from '../api/user';
import { LoginAtom } from '../jotai/Login';

const KakaoAuthPage = () => {
  const nav = useNavigate();
  const [loginInfo, setLoginInfo] = useAtom(LoginAtom);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code') || '';

    const login = async () => {
      const res = await sendCode(code);
      const data = res?.data;

      if (data) {
        // 로그인 성공 시 사용자 정보를 다 받아서 recoil에 저장
        setLoginInfo({
          memberId: data.memberId,
          memberType: data.memberType,
          workerId: data.workerId,
          managerId: data.managerId,
          // accessToken: data.accessToken,
          // refreshToken: data.refreshToken,
        });
        console.log('data', data);

        // 로그인 처리
        window.localStorage.setItem('accessToken', data.accessToken);
        window.localStorage.setItem('refreshToken', data.refreshToken);

        // 회원 가입 페이지로 이동
        nav('/signupselect/kakao');
      }
    };

    login();
  }, []);

  return <></>;
};

export default KakaoAuthPage;
