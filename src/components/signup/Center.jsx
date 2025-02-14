import styled from 'styled-components';
import { useState } from 'react';

const Center = () => {
  const [carYn, setCarYn] = useState(false);

  return (
    <Container>
      <Wrapper>
        <CarYn>
          <Label className="car">목욕 차량 소유 여부</Label>
          <RadioWrapper>
            <div>
              <label htmlFor="yes">예</label>
              <input
                type="radio"
                name="carYn"
                value="true"
                id="yes"
                checked={carYn}
                onChange={() => setCarYn(true)}
              />
            </div>
            <div>
              <label htmlFor="no">아니오</label>
              <input
                type="radio"
                name="carYn"
                value="false"
                id="no"
                checked={!carYn}
                onChange={() => setCarYn(false)}
              />
            </div>
          </RadioWrapper>
        </CarYn>
      </Wrapper>
      <Wrapper>
        <CenterGrade>
          <Label htmlFor="grade">센터 등급(선택)</Label>
          <Input
            type="text"
            id="grade"
            placeholder="센터 등급을 입력하세요."
            maxLength="20"
          />
        </CenterGrade>
        <CenterPeriod>
          <Label htmlFor="period">운영 기간(선택)</Label>
          <Input
            type="text"
            id="period"
            placeholder="운영 기간을 입력하세요."
            maxLength="20"
          />
        </CenterPeriod>
      </Wrapper>
    </Container>
  );
};

export default Center;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = styled.div``;

const CarYn = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: 16px;

  &.car {
    font-weight: bold;
  }
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid #909090;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;
`;

const RadioWrapper = styled.div`
  display: flex;

  input {
    margin-left: 5px;
  }

  div:first-child {
    margin-right: 24px;
  }
`;

const CenterGrade = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 8px;
`;

const CenterPeriod = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
