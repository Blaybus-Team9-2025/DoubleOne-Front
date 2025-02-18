import styled from 'styled-components';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import {
  EmailWorkerSignupAtom,
  EmailManagerSignupAtom,
  KakaoManagerSignupAtom,
  KakaoWorkerSignupAtom,
} from '../../jotai/Signup';
import { SeniorInfoAtom } from '../../jotai/SeniorInfo';
import { useEffect } from 'react';

const NameAndGender = ({ type, target, error }) => {
  const atom = (() => {
    if (type === 'email' && target === 'worker') {
      return EmailWorkerSignupAtom;
    } else if (type === 'email' && target === 'manager') {
      return EmailManagerSignupAtom;
    } else if (type === 'kakao' && target === 'worker') {
      return KakaoWorkerSignupAtom;
    } else if (type === 'kakao' && target === 'manager') {
      return KakaoManagerSignupAtom;
    }

    if (type === 'info' && target === 'senior') {
      return SeniorInfoAtom;
    }
  })();

  const [input, setInput] = useAtom(atom);

  const onChangeName = (e) => {
    setInput((prev) => ({ ...prev, name: e.target.value }));
  };

  const onGenderChange = (gender) => {
    setInput((prev) => ({ ...prev, gender: gender }));
  };

  useEffect(() => {
    // 초기값
    if (!input.gender) {
      onGenderChange('F');
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <Div>
          <div>
            <Label htmlFor="name">이름</Label>
            <Required />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름을 입력하세요."
            value={input.name}
            maxLength="4"
            onChange={onChangeName}
            className={error && 'error'}
          />
        </Div>
        <Div>
          <div>
            <Label>성별</Label>
            <Required />
          </div>
          <ButtonContainer>
            <button
              className={input.gender === 'M' ? 'active' : ''}
              onClick={() => onGenderChange('M')}
            >
              남
            </button>
            <button
              className={!input.gender || input.gender === 'F' ? 'active' : ''}
              onClick={() => onGenderChange('F')}
            >
              여
            </button>
          </ButtonContainer>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default NameAndGender;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 16px;
  }

  input {
    ${InputStyle}

    &.error {
      border-color: var(--red);
    }
  }
`;

const Label = styled.label`
  ${LabelStyle}
`;

const ButtonContainer = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid #909090;

  button {
    height: 40px;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &.active {
      background-color: var(--blue);
      box-shadow: var(--shadow);
    }
  }
`;
