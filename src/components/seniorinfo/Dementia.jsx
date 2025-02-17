import styled from 'styled-components';

import Required from '../_common/Required';
import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const Dementia = () => {
  return (
    <Container>
      <div>
        <Label>치매증상(복수선택 가능)</Label>
        <Required />
      </div>
      <Wrapper>
        {getOptions('dementia').map((val, idx) => (
          <CheckboxWrapper key={idx}>
            <Checkbox type="checkbox" id={idx} />
            <Text htmlFor={idx}>{val}</Text>
          </CheckboxWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Dementia;

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
  justify-content: center;
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
