import styled from 'styled-components';

import Required from '../_common/Required';
import { getOptions } from '../../util/get-options';
import { getKeyByValue } from '../../util/getKeyByValue';

const Cohabitation = ({ setCohabitation, error, data }) => {
  const options = getOptions('cohabitation');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);

  return (
    <Container>
      <div>
        <Label>동거인 여부</Label>
        <Required />
      </div>
      <Wrapper>
        {optionKeys.map((val, idx) => (
          <RadioWrapper key={idx}>
            <input
              checked={data && getKeyByValue(options, data) === val}
              type="radio"
              id={val}
              name="cohabitation"
              onChange={() => {
                const selectedValue = options.find((obj) => obj[val])[val];
                setCohabitation(selectedValue);
              }}
            />
            <Text htmlFor={val} className={error && 'error'}>
              {val}
            </Text>
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

  &.error {
    color: var(--red);
  }
`;
