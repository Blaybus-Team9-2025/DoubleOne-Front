import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const ToiletingAssistance = () => {
  return (
    <Container>
      <Label>배변보조</Label>
      <Wrapper>
        {getOptions('toileting').map((val, idx) => (
          <CheckboxWrapper key={idx}>
            <Checkbox type="checkbox" id={val} />
            <Text htmlFor={val}>{val}</Text>
          </CheckboxWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ToiletingAssistance;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  ${CheckboxStyle}
`;

const Text = styled.label`
  cursor: pointer;
`;
