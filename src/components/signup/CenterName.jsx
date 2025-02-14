import styled from 'styled-components';
import { useState } from 'react';

import Required from '../_common/Required';
import Alert from './Alert';

const CenterName = () => {
  const [center, setCenter] = useState('');
  const [validYn, setValidYn] = useState(true);

  const isValidCenter = () => {
    const centerList = []; // 백에서 가져오기

    if (centerList.includes(center)) {
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
          value={center}
          onChange={(e) => setCenter(e.target.value)}
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
    height: 40px;
    border: 1px solid #909090;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    flex: 0.6;
  }

  button {
    background-color: var(--green);
    box-shadow: var(--shadow);
    border-radius: 5px;
    flex: 0.4;
    cursor: pointer;
  }
`;
