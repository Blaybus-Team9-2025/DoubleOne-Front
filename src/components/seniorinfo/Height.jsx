import styled from 'styled-components';

import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const Height = () => {
  return (
    <Container>
      <Label>어르신 키</Label>
      <Wrapper>
        <Input type="text" />
        <p>cm</p>
      </Wrapper>
    </Container>
  );
};

export default Height;

const Container = styled.section`
  display: flex;
  flex-direction: column;
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
