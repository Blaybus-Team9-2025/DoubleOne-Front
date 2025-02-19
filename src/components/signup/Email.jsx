import styled from 'styled-components';
import { useState } from 'react';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import Alert from './Alert';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import {
  EmailWorkerSignupAtom,
  EmailManagerSignupAtom,
} from '../../jotai/Signup';
import { sendEmail, verifyEmailCode } from '../../api/signup';

const Email = ({ target, error }) => {
  const atom =
    target === 'worker' ? EmailWorkerSignupAtom : EmailManagerSignupAtom;
  const [input, setInput] = useAtom(atom);
  const [matchYn, setMatchYn] = useState(true);
  const [code, setCode] = useState('');

  const onChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onGetCode = async () => {
    await sendEmail({
      email: input.email,
    });
  };

  const verifyCode = async () => {
    const res = await verifyEmailCode({
      email: input.email,
      verificationCode: code,
    });

    if (!res) {
      setMatchYn(false);
    } else {
      setMatchYn(true);
    }
  };

  return (
    <Container>
      <div>
        <Label htmlFor="email">아이디(이메일)</Label>
        <Required />
      </div>
      <InputWrapper>
        <Wrapper>
          <Input
            placeholder="abc@email.com"
            value={input?.email}
            onChange={onChangeInput}
            name="email"
            className={error && 'error'}
          />
          <Button onClick={onGetCode}>인증번호 받기</Button>
        </Wrapper>
        <div>
          <Wrapper>
            <Input
              placeholder="인증번호"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              name="code"
              className={error && 'error'}
            />
            <Button onClick={verifyCode}>인증번호 확인</Button>
          </Wrapper>
          {!matchYn && (
            <Alert text="인증번호가 일치하지 않습니다. 다시 확인해주세요." />
          )}
        </div>
      </InputWrapper>
    </Container>
  );
};

export default Email;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 0.7;
  ${InputStyle}

  &.error {
    border-color: var(--red);
  }
`;

const Button = styled.button`
  height: 40px;
  flex: 0.3;
  font-size: 16px;
  white-space: nowrap;
  background-color: var(--green);
  box-shadow: var(--shadow);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
