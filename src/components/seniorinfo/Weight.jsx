import styled from 'styled-components';

import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import Required from '../_common/Required';

const Weight = ({ setWeight }) => {
  return (
    <Container>
      <div>
        <Label>어르신 몸무게</Label>
        <Required />
      </div>
      <Wrapper>
        <Input type="text" onChange={(e) => setWeight(e.target.value)} />
        <p>kg</p>
      </Wrapper>
    </Container>
  );
};

export default Weight;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  width: 50%;
  position: relative;

  p {
    position: absolute;
    right: 12px;
    top: 8px;
    color: var(--grey);
  }
`;

const Input = styled.input`
  width: 100%;
  ${InputStyle}
`;
