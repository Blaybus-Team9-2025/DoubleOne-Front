import styled from 'styled-components';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import { SignupAtom } from '../../jotai/Signup';
import { InputStyle } from '../../util/common-style';

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
      <Section className="name">
        <Wrapper>
          <label htmlFor="name">
            이름
            <Required />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름을 입력하세요."
            value={signup.name}
            maxLength="4"
            onChange={onChangeInput}
          />
        </Wrapper>
        <Wrapper>
          <label>
            성별
            <Required />
          </label>
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
        </Wrapper>
      </Section>
    </Container>
  );
};

export default NameAndGender;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
`;

const Section = styled.section`
  width: 100%;
  display: flex;

  &.name {
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    margin-bottom: 4px;
  }

  input {
    ${InputStyle}
  }
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
