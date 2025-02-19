import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAtom } from 'jotai';

import Title from '../components/_common/Title';
import Header from '../components/_common/Header';
import RoundButton from '../components/_common/RoundButton';
import chatBubble from '../assets/chat_bubble.png';
import Modal from '../components/_common/Modal';
import { KAKAO_AUTH_URI } from '../api/user';
import { EmailLogin } from '../api/user';
import { LoginAtom } from '../jotai/Login';

const ModalInfo = {
  type: 'alert',
  text: '등록되지 않은 아이디거나, 아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요.',
  btnText1: '확인',
};

const Login = () => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [modalYn, setModalYn] = useState(false);
  const [loginInfo, setLoginInfo] = useAtom(LoginAtom);

  const onClose = () => {
    setModalYn(false);
  };

  const onKakaoClick = () => {
    // 카카오로 이동
    window.location.href = KAKAO_AUTH_URI;
  };

  const onLoginClick = async () => {
    const res = await EmailLogin(input);

    if (res) {
      setLoginInfo({
        memberId: res.memberId,
        memberType: res.memberType,
        workerId: res.workerId,
        managerId: res.managerId,
      });

      // 로그인 처리
      window.localStorage.setItem('accessToken', res.accessToken);
      window.localStorage.setItem('refreshToken', res.refreshToken);

      // 홈 페이지로 이동
      nav(`/home/${res?.memberType.toLowerCase()}`);
    } else {
      // 로그인 실패한 경우
      setModalYn(true);
    }
  };

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Header />
      <Title mb="60">
        <p>로그인/회원가입</p>
      </Title>
      <KakaoButton onClick={onKakaoClick}>
        <img src={chatBubble} />
        <span>카카오로 1초만에 시작하기</span>
      </KakaoButton>
      <LoginSection>
        <IdWrapper>
          <p>아이디(이메일)</p>
          <input
            type="text"
            name="email"
            placeholder="아이디(이메일)"
            value={input.email}
            onChange={onChangeInput}
          />
        </IdWrapper>
        <PwWrapper>
          <p>비밀번호</p>
          <div>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={input.password}
              onChange={onChangeInput}
            />
            <span onClick={() => nav('/find-pw/auth')}>비밀번호 찾기</span>
          </div>
        </PwWrapper>
      </LoginSection>
      <ButtonSection>
        <RoundButton color="green" text="로그인" onClick={onLoginClick}>
          로그인
        </RoundButton>
        <RoundButton
          color="blue"
          text="이메일로 회원가입하기"
          onClick={() => nav(`/signupselect/email`)}
        >
          이메일로 회원가입하기
        </RoundButton>
      </ButtonSection>
      <Modal isOpen={modalYn} onClose={onClose} {...ModalInfo} />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin-top: 100px;
`;

const KakaoButton = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcd00;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;

  font-size: 14px;
  font-weight: bold;
  color: black;
  cursor: pointer;

  img {
    margin-right: 20px;
    position: relative;
    bottom: -2px;
  }
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  p {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 45px;
    border: 1px solid #a0a0a0;
    border-radius: 10px;
    padding: 12px 20px;
    font-size: 14px;
  }
`;

const IdWrapper = styled.div`
  margin-bottom: 20px;
`;

const PwWrapper = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;
  }

  span {
    font-size: 12px;
    cursor: pointer;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
