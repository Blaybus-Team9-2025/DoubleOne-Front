import styled from 'styled-components';
import { useState } from 'react';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import Alert from './Alert';
import { SignupAtom } from '../../jotai/Signup';
import { InputStyle } from '../../util/common-style';

const CenterName = () => {
  const [validYn, setValidYn] = useState(true);
  const [signup, setSignup] = useAtom(SignupAtom);

  const isValidCenter = () => {
    const centerList = []; // 백에서 가져오기

    if (centerList.includes(signup.centerName)) {
      setValidYn(true);
    } else {
      setValidYn(false);
    }
  };

  return (
    <Container>
      <div>
        <label htmlFor="center">센터이름</label>
        <Required />
      </div>
      <Wrapper>
        <input
          type="text"
          placeholder="센터이름을 입력하세요."
          value={signup.centerName}
          onChange={(e) =>
            setSignup({
              centerName: e.target.value,
            })
          }
        />
        <button onClick={isValidCenter}>센터 확인</button>
      </Wrapper>
      {!validYn && <Alert text="센터 이름을 확인해주세요" />}
    </Container>
  );
};

export default CenterName;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 8px;

  label {
    font-weight: bold;
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 0.6;
    ${InputStyle}
  }

  button {
    background-color: var(--green);
    box-shadow: var(--shadow);
    border-radius: 5px;
    flex: 0.4;
    cursor: pointer;
  }
`;
