import { useRef, useState } from 'react';
import styled from 'styled-components';
import eye from '../../assets/eye.png';
import RoundButton from '../_common/RoundButton';
import { isValidPassword } from '../../util/isValidPassword';

const PwReset = () => {
  const [alarms, setAlarms] = useState({
    pw: false,
    pwCheck: false,
  });
  const [shows, setShows] = useState({
    pw: false,
    pwCheck: false,
  });

  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const pwRef = useRef(null);
  const pwCheckRef = useRef(null);

  const handleShow = (e) => {
    const id = e.target.id;

    if (id === 'pw') {
      setShows({ ...shows, pw: !shows.pw });
    } else if (id === 'pwCheck') {
      setShows({ ...shows, pwCheck: !shows.pwCheck });
    }
  };

  const handlePw = (e) => {
    const newPw = e.target.value;
    setPw(newPw);

    if (!isValidPassword(newPw)) {
      setAlarms({ ...alarms, pw: true });
      return;
    }
    setAlarms({ ...alarms, pw: false });
  };

  const handlePwCheck = (e) => {
    const value = e.target.value;
    setPwCheck(value);
    if (pw !== value) {
      setAlarms({ ...alarms, pwCheck: true });
      return;
    }
    setAlarms({ ...alarms, pwCheck: false });
  };

  const handleClick = () => {
    // 비밀번호 조건 확인
    if (!isValidPassword(pw)) {
      setAlarms({ ...alarms, pw: true });
      return;
    }
    if (pw !== pwCheck) {
      setAlarms({ ...alarms, pwCheck: true });
      return;
    }
    // 비밀번호 변경 api 연결
  };

  return (
    <div>
      <Subtitle>비밀번호 재설정</Subtitle>
      <div>
        <InputDiv>
          <input
            placeholder="새로운 비밀번호"
            type={shows.pw ? 'text' : 'password'}
            ref={pwRef}
            onChange={handlePw}
          />
          <button id="pw" onClick={handleShow}>
            <img src={eye} id="pw" />
          </button>
        </InputDiv>
        <Margin>
          <Alert alarm={alarms.pw.toString()}>비밀번호를 확인해주세요.</Alert>
        </Margin>
      </div>
      <div>
        <InputDiv>
          <input
            placeholder="비밀번호 확인"
            type={shows.pwCheck ? 'text' : 'password'}
            ref={pwCheckRef}
            onChange={handlePwCheck}
          />
          <button id="pwCheck" onClick={handleShow}>
            <img src={eye} id="pwCheck" />
          </button>
        </InputDiv>
        <Margin>
          <Alert alarm={alarms.pwCheck.toString()}>
            새로운 비밀번호와 동일하게 입력해주세요.
          </Alert>
        </Margin>
      </div>
      <p>6-20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합</p>
      <RoundButton
        text={'비밀번호 재설정'}
        color={'blue'}
        mt={24}
        onClick={handleClick}
      />
    </div>
  );
};

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 34px;
`;

const InputDiv = styled.div`
  width: 100%;
  font-size: 14px;
  position: relative;
  input {
    border: 1px solid #a0a0a0;
    border-radius: 10px;
    padding: 12px 22px;
    width: 100%;
  }
  button {
    width: 24px;
    height: 24px;
    position: fixed;
    transform: translateY(10px);
    right: 36px;
    cursor: pointer;
  }
`;

const Margin = styled.div`
  width: 100%;
  padding: 4px 0;
`;

const Alert = styled.div`
  width: 100%;
  color: var(--red);
  display: ${(props) => (props.alarm === 'true' ? '' : 'none')};
  font-size: 12px;
`;

export default PwReset;
