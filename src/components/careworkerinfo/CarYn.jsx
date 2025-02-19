import styled from 'styled-components';
import { useAtom } from 'jotai';

import {
  KakaoManagerSignupAtom,
  EmailManagerSignupAtom,
} from '../../jotai/Signup';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';

const CarYn = ({ type }) => {
  const atom = (() => {
    if (type === 'email') {
      return EmailManagerSignupAtom;
    } else if (type === 'kakao') {
      return KakaoManagerSignupAtom;
    } else if (type === 'register') {
      return CareworkerConditionsAtom;
    }
  })();
  const [input, setInput] = useAtom(atom);

  const key = type === 'register' ? 'hasVehicle' : 'hasTruck';

  const onChange = (val) => {
    setInput((prev) => {
      const newState = {
        ...prev,
        [key]: val,
      };

      return newState;
    });
  };

  return (
    <Container>
      <Label>
        {type === 'register' ? '차량 소유 여부' : '목욕 차량 소유 여부'}
      </Label>
      <Wrapper>
        <div>
          <label htmlFor="yes">예</label>
          <input
            type="radio"
            name="carYn"
            id="yes"
            value="true"
            checked={input?.[key] === true}
            onChange={() => onChange(true)}
          />
        </div>
        <div>
          <label htmlFor="no">아니오</label>
          <input
            type="radio"
            name="carYn"
            id="no"
            value="false"
            checked={input?.[key] === false}
            onChange={() => onChange(false)}
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
