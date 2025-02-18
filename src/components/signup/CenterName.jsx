import styled from 'styled-components';
import { useState } from 'react';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import Alert from './Alert';
import { InputStyle } from '../../util/common-style';
import {
  KakaoManagerSignupAtom,
  EmailManagerSignupAtom,
} from '../../jotai/Signup';
import { getCenterNames } from '../../api/signup';

const CenterName = ({ type, error }) => {
  const atom = (() => {
    if (type === 'email') {
      return EmailManagerSignupAtom;
    } else if (type === 'kakao') {
      return KakaoManagerSignupAtom;
    }
  })();

  const [validYn, setValidYn] = useState(true);
  const [input, setInput] = useAtom(atom);

  const isValidCenter = async () => {
    const res = await getCenterNames();

    // if (centerList.includes(input.centerName)) {
    //   setValidYn(true);
    // } else {
    //   setValidYn(false);
    // }
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
          value={input.centerName}
          className={error && 'error'}
          onChange={(e) =>
            setInput((prev) => ({
              ...prev,
              centerName: e.target.value,
            }))
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
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 0.6;
    ${InputStyle}

    &.error {
      border-color: var(--red);
    }
  }

  button {
    background-color: var(--green);
    box-shadow: var(--shadow);
    border-radius: 5px;
    font-size: 16px;
    flex: 0.4;
    cursor: pointer;
  }
`;
