import styled from 'styled-components';

import Required from '../_common/Required';
import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const Dementia = ({ dementia, setDementia, error }) => {
  const handleCheck = (val) => {
    setDementia((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  };
  return (
    <Container>
      <div>
        <Label>치매증상(복수선택 가능)</Label>
        <Required />
      </div>
      <Wrapper>
        {getOptions('dementia').map((val, idx) => (
          <CheckboxWrapper key={idx}>
            <Checkbox
              type="checkbox"
              id={idx}
              checked={dementia?.includes(val)}
              onChange={() => handleCheck(val)}
            />
            <Text htmlFor={idx} className={error && 'error'}>
              {val}
            </Text>
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

  &.error {
    color: var(--red);
  }
`;
