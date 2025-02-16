import styled from 'styled-components';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import Dropdown from './Dropdown';
import { SignupAtom } from '../../jotai/Signup';
import { InputStyle } from '../../util/common-style';

const years = Array.from({ length: 2025 - 1930 + 1 }, (_, i) => 2025 - i);
const months = Array.from({ length: 12 - 1 + 1 }, (_, i) => 1 + i);
const days = Array.from({ length: 31 - 1 + 1 }, (_, i) => 1 + i);

const BirthDate = () => {
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
        <label htmlFor="dob">
          생년월일
          <Required />
        </label>
        <DropdownWrapper>
          <Dropdown
            options={years}
            width="40%"
            className="year"
            setData={setSignup}
            data={signup}
            target="year"
            init="2000"
          />
          <Dropdown options={months} width="30%" className="month" />
          <Dropdown options={days} width="30%" className="day" />
        </DropdownWrapper>
      </Wrapper>
    </Container>
  );
};

export default BirthDate;

const Container = styled.div``;

const DropdownWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
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

  &.dateOfBirth,
  &.tel {
    width: 100%;
  }
`;
