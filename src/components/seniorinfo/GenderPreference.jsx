import styled from 'styled-components';

import { LabelStyle } from '../../util/common-style';
import { useAtom } from 'jotai';
import { RecruitingInfoAtom } from '../../jotai/Recruiting';

const GenderPreference = () => {
  const [input, setInput] = useAtom(RecruitingInfoAtom);

  return (
    <Container>
      <div>
        <Label>선호 요양사 성별</Label>
      </div>
      <Wrapper>
        <Div>
          <input
            type="radio"
            name="gender"
            id="m"
            checked={input.preferGender === 'M'}
            onChange={() =>
              setInput((prev) => ({ ...prev, preferGender: 'M' }))
            }
          />
          <label htmlFor="m">남성</label>
        </Div>
        <Div>
          <input
            type="radio"
            name="gender"
            id="f"
            checked={input.preferGender === 'F'}
            onChange={() =>
              setInput((prev) => ({ ...prev, preferGender: 'F' }))
            }
          />
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
