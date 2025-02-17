import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const DailyAssistance = () => {
  return (
    <Container>
      <Label>일상생활</Label>
      <Wrapper>
        {getOptions('daily').map((val, idx) => (
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
