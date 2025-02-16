import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const options = [
  '스스로 거동 가능',
  '휠체어 이동 보조',
  '이동시 부축 도움',
  '거동 불가',
];

const MobilityAssistance = () => {
  return (
    <Container>
      <Label>이동 보조</Label>
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

export default MobilityAssistance;

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
