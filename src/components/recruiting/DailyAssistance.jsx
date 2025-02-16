import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const options = [
  '청소, 빨래 보조',
  '산책, 간단한 운동',
  '목욕 보조',
  '말벗 등 정서지원',
  '병원 동행',
  '인지자극 활동',
];

const DailyAssistance = () => {
  return (
    <Container>
      <Label>일상생활</Label>
      <Wrapper>
        {options.map((val, idx) => (
          <Col key={idx}>
            <input type="checkbox" id={val} />
            <label htmlFor={val}>{val}</label>
          </Col>
        ))}
      </Wrapper>
    </Container>
  );
};

export default DailyAssistance;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Col = styled.div`
  width: calc((100% - 8px) / 2);
  white-space: nowrap;
  display: flex;
  align-items: center;

  input {
    ${CheckboxStyle}
  }

  input,
  label {
    cursor: pointer;
  }
`;
