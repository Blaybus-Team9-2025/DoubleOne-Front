import styled from 'styled-components';
import { useAtom } from 'jotai';

import {
  KakaoManagerSignupAtom,
  EmailManagerSignupAtom,
} from '../../jotai/Signup';

const CarYn = ({ type }) => {
  const atom = (() => {
    if (type === 'email') {
      return EmailManagerSignupAtom;
    } else if (type === 'kakao') {
      return KakaoManagerSignupAtom;
    }
  })();
  const [input, setInput] = useAtom(atom);

  return (
    <Container>
      <Label>목욕 차량 소유 여부</Label>
      <Wrapper>
        <div>
          <label htmlFor="yes">예</label>
          <input
            type="radio"
            name="carYn"
            id="yes"
            checked={input?.hasTruck}
            onChange={() =>
              setInput((prev) => ({
                ...prev,
                hasTruck: true,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="no">아니오</label>
          <input
            type="radio"
            name="carYn"
            id="no"
            checked={!input?.hasTruck}
            onChange={() =>
              setInput((prev) => ({
                ...prev,
                hasTruck: false,
              }))
            }
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default CarYn;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.p`
  font-size: 16px;
  user-select: none;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  input,
  label {
    cursor: pointer;
  }

  label {
    margin-right: 5px;
  }
`;
