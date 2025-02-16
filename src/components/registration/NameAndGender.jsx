import styled from 'styled-components';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import { SignupAtom } from '../../jotai/Signup';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const NameAndGender = () => {
  const [signup, setSignup] = useAtom(SignupAtom);

  const onChangeInput = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

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
            value={signup.name}
            maxLength="4"
            onChange={onChangeInput}
          />
        </Div>
        <Div>
          <div>
            <Label>성별</Label>
            <Required />
          </div>
          <ButtonContainer>
            <button
              className={signup.gender === 'male' ? 'active' : ''}
              onClick={() =>
                setSignup({
                  ...signup,
                  gender: 'male',
                })
              }
            >
              남
            </button>
            <button
              className={
                !signup.gender || signup.gender === 'female' ? 'active' : ''
              }
              onClick={() =>
                setSignup({
                  ...signup,
                  gender: 'female',
                })
              }
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
    cursor: pointer;

    &.active {
      background-color: var(--blue);
      box-shadow: var(--shadow);
    }
  }
`;
