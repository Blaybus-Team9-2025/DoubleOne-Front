import styled from 'styled-components';

import Required from '../_common/Required';
import { LabelStyle } from '../../util/common-style';

const GenderPreference = () => {
  return (
    <Container>
      <div>
        <Label>선호 요양사 성별</Label>
        <Required />
      </div>
      <Wrapper>
        <Div>
          <input type="radio" name="gender" id="none" />
          <label htmlFor="none">무관</label>
        </Div>
        <Div>
          <input type="radio" name="gender" id="m" />
          <label htmlFor="m">남성</label>
        </Div>
        <Div>
          <input type="radio" name="gender" id="f" />
          <label htmlFor="f">여성</label>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default GenderPreference;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input,
  label {
    cursor: pointer;
  }
`;
