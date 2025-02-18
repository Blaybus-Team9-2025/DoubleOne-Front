import styled from 'styled-components';
import { useState } from 'react';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import Alert from './Alert';
import { isValidPassword } from '../../util/isValidPassword';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import {
  EmailManagerSignupAtom,
  EmailWorkerSignupAtom,
} from '../../jotai/Signup';

const Password = ({ required, target, error }) => {
  const atom =
    target === 'worker' ? EmailWorkerSignupAtom : EmailManagerSignupAtom;
  const [input, setInput] = useAtom(atom);
  const [checkPw, setCheckPw] = useState('');
  const [errorType, setErrorType] = useState('none');

  const onChangePw = (e) => {
    const newPw = e.target.value;
    setInput((prev) => ({ ...prev, password: newPw }));

    if (!isValidPassword(newPw)) {
      setErrorType('invalid'); // 비밀번호 형식 오류
    } else if (checkPw && newPw !== checkPw) {
      setErrorType('mismatch'); // 비밀번호 확인과 불일치
    } else {
      setErrorType('none'); // 정상
    }
  };

  const onChangeCheckPw = (e) => {
    const newCheckPw = e.target.value;
    setCheckPw(newCheckPw);

    if (newCheckPw !== input.password) {
      setErrorType('mismatch'); // 비밀번호와 불일치
    } else if (isValidPassword(input.password)) {
      setErrorType('none'); // 정상
    }
  };

  return (
    <Container>
      <div>
        <Label htmlFor="pw">비밀번호</Label>
        {required && <Required />}
      </div>
      <Wrapper>
        <Input
          id="pw"
          type="password"
          placeholder="비밀번호"
          value={input.password}
          onChange={onChangePw}
          className={error && 'error'}
        />
        {errorType === 'invalid' ? (
          <Alert text="비밀번호를 다시 확인해주세요." />
        ) : (
          <Blank />
        )}
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={checkPw}
          onChange={onChangeCheckPw}
          className={error && 'error'}
        />
        {errorType === 'mismatch' && (
          <Alert text="비밀번호가 일치하지 않습니다. 다시 확인해주세요." />
        )}
        <p>6-20자/영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합</p>
      </Wrapper>
    </Container>
  );
};

export default Password;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Blank = styled.div`
  height: 8px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  ${InputStyle}

  &.error {
    border-color: var(--red);
  }
`;
