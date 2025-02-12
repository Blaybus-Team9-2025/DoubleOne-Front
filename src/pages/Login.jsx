import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Title from '../components/_common/Title';
import chatBubble from '../assets/chat_bubble.png';

const Login = () => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    id: '',
    pw: '',
  });

  const onKakaoClick = () => {
    // 카카오로 이동
  };

  const onLoginClick = () => {
    // 로그인 api 사용
  };

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
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
            name="id"
            placeholder="아이디(이메일)"
            value={input.id}
            onChange={onChangeInput}
          />
        </IdWrapper>
        <PwWrapper>
          <p>비밀번호</p>
          <div>
            <input
              type="password"
              name="pw"
              placeholder="비밀번호"
              value={input.pw}
              onChange={onChangeInput}
            />
            <span>비밀번호 찾기</span>
          </div>
        </PwWrapper>
      </LoginSection>
      <ButtonSection>
        <Button className="login" onClick={onLoginClick}>
          로그인
        </Button>
        <Button className="signUp" onClick={() => nav(`/signupselect/email`)}>
          이메일로 회원가입하기
        </Button>
      </ButtonSection>
    </div>
  );
};

export default Login;

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
  }
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;

  border-radius: 30px;
  box-shadow: var(--shadow);
  font-size: 16px;
  cursor: pointer;

  &.login {
    background-color: var(--green);
    margin-bottom: 5px;
  }

  &.signUp {
    background-color: var(--blue);
  }
`;
