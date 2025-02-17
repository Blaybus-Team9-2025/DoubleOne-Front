import styled from 'styled-components';

import { InputStyle } from '../../util/common-style';

const Center = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Center;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 16px;

  &.car {
    font-weight: bold;
  }
`;

const Input = styled.input`
  ${InputStyle}
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
