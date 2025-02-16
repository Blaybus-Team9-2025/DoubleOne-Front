import styled from 'styled-components';
import { useState } from 'react';

import Required from '../_common/Required';
import Alert from './Alert';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const Email = () => {
  const [matchYn, setMatchYn] = useState(true);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const isValidCode = () => {
    const answer = '1234'; // 백에서 받아오기

    if (code === answer) {
      setMatchYn(true);
    } else {
      setMatchYn(false);
    }
  };

  const getCode = () => {};

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={getCode}>인증번호 받기</Button>
        </Wrapper>
        <div>
          <Wrapper>
            <Input
              placeholder="인증번호"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={isValidCode}>인증번호 확인</Button>
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
`;

const Button = styled.button`
  height: 40px;
  flex: 0.3;
  background-color: var(--green);
  box-shadow: var(--shadow);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
