import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const MealAssistance = () => {
  const options = getOptions('meal');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);

  return (
    <Container>
      <Label>식사 보조</Label>
      <Wrapper>
        {optionKeys.map((val, idx) => (
          <Col key={idx}>
            <input type="checkbox" id={val} />
            <label htmlFor={val}>{val}</label>
          </Col>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MealAssistance;

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
