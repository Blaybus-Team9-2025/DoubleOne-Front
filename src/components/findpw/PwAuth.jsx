import { useState } from 'react';
import styled from 'styled-components';

const PwAuth = () => {
  const [alarms, setAlarms] = useState({
    email: false,
    authNum: false,
  });

  return (
    <div>
      <Subtitle>본인인증</Subtitle>
      <div>
        <InputDiv>
          <input placeholder="아이디(이메일) 입력" />
          <button className="green">인증번호 전송</button>
        </InputDiv>
        <Alert alarm={alarms.email.toString()}>
          가입된 아이디 정보가 없습니다. 다시 확인해주세요.
        </Alert>
      </div>
      <div>
        <InputDiv>
          <input placeholder="인증번호 입력" />
          <button className="blue">본인인증</button>
        </InputDiv>
        <Alert alarm={alarms.authNum.toString()}>
          인증번호가 일치하지 않습니다. 다시 확인해주세요.
        </Alert>
      </div>
    </div>
  );
};

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const InputDiv = styled.div`
  display: flex;
  gap: 6px;
  font-size: 14px;
  input {
    border: 1px solid #a0a0a0;
    border-radius: 10px;
    padding: 12px 22px;
    width: 100%;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 98px;
    padding: 0 12px;
    flex-shrink: 0;
    border-radius: 10px;
    white-space: nowrap;
    &.green {
      background-color: var(--green);
    }
    &.blue {
      background-color: var(--blue);
    }
  }
`;

const Alert = styled.div`
  height: 30px;
  width: 100%;
  color: var(--red);
  visibility: ${(props) => (props.alarm === 'true' ? 'visible' : 'hidden')};
  font-size: 12px;
`;

export default PwAuth;
