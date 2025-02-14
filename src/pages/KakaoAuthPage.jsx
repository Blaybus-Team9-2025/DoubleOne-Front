import { useEffect } from 'react';
import { sendCode } from '../api/user';

const KakaoAuthPage = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code') || '';

    const login = async () => {
      const res = await sendCode(code);
      const data = res?.data;

      if (data) {
        // 회원인지 아닌지 판단

        // 회원이면 사용자 정보를 다 받아서 recoil에 저장
        // setLogin({
        //   nickname: data.nickname,
        //   email: data.email,
        //   accessToken: data.accessToken,
        //   refreshToken: data.refreshToken,
        //   isfirst: data.isfirst,
        // });

        // 로그인 처리 & 메인 페이지로 이동
        window.localStorage.setItem('accessToken', data.accessToken);
        window.location.href = '/';

        // 회원이 아니면 사용자 정보를 일부 받기(이름, 연락처 등) -> 카카오로 회원가입하기 (개인 or 기업) 페이지로 연결
      }
      // data가 안오면 카카오 로그인 실패 -> '카카오 계정을 가져오지 못했습니다' 모달창 띄우기
    };

    login();
  }, []);

  return <></>;
};

export default KakaoAuthPage;
