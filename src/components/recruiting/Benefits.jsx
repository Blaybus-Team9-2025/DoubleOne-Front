import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const options = [
  '4대 보험',
  '교통비 지원',
  '퇴직 급여',
  '경조사비',
  '명절선물',
  '식사(비) 지원',
  '장기근속 장려금',
  '정부지원금',
  '중증가산수당',
  '운전수당',
];

const Benefits = () => {
  return (
    <Container>
      <Label>복리 후생(복수 선택 가능)</Label>
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

export default Benefits;

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
