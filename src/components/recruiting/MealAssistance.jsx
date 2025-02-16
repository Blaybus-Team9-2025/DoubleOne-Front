import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const options = [
  '스스로 식사 가능',
  '죽, 반찬 등 조리 필요',
  '식사 차려드리기',
  '경관식 보조',
];

const MealAssistance = () => {
  return (
    <Container>
      <Label>식사 보조</Label>
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
