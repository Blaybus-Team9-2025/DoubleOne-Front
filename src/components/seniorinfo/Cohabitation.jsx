import styled from 'styled-components';

import Required from '../_common/Required';
import { CheckboxStyle } from '../../util/common-style';

const options = [
  '독거',
  '배우자와 동거, 돌봄 시간 중 집에 있음',
  '배우자와 동거, 돌봄 시간 중 자리 비움',
  '다른 가족과 동거, 돌봄 시간 중 집에 있음',
  '다른 가족과 동거, 돌봄 시간 중 자리 비움',
];

const Cohabitation = () => {
  return (
    <Container>
      <div>
        <Label>동거인 여부</Label>
        <Required />
      </div>
      <Wrapper>
        {options.map((val, idx) => (
          <RadioWrapper key={idx}>
            <input type="radio" id={val} name="cohabitation" />
            <Text htmlFor={val}>{val}</Text>
          </RadioWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Cohabitation;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 8px;
    cursor: pointer;
  }
`;

const Text = styled.label`
  cursor: pointer;
`;
