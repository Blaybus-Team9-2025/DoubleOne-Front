import styled from 'styled-components';

import Required from '../_common/Required';
import { getOptions } from '../../util/get-options';

const Cohabitation = () => {
  return (
    <Container>
      <div>
        <Label>동거인 여부</Label>
        <Required />
      </div>
      <Wrapper>
        {getOptions('cohabitation').map((val, idx) => (
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
