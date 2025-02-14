import styled from 'styled-components';
import { useState } from 'react';

import Dropdown from './Dropdown';
import Required from '../_common/Required';

const years = Array.from({ length: 2025 - 1930 + 1 }, (_, i) => 2025 - i);
const months = Array.from({ length: 12 - 1 + 1 }, (_, i) => 1 + i);
const days = Array.from({ length: 31 - 1 + 1 }, (_, i) => 1 + i);

const Default = () => {
  const [selected, setSelected] = useState('female');
  const onChangeInput = () => {};

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
            value={name}
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
              className={selected === 'male' ? 'active' : ''}
              onClick={() => setSelected('male')}
            >
              남
            </button>
            <button
              className={selected === 'female' ? 'active' : ''}
              onClick={() => setSelected('female')}
            >
              여
            </button>
          </ButtonContainer>
        </Wrapper>
      </Section>
      <Section className="dateOfBirth">
        <Wrapper className="dateOfBirth">
          <label htmlFor="dob">
            생년월일
            <Required />
          </label>
          <DropdownWrapper>
            <Dropdown options={years} width="40%" className="year" />
            <Dropdown options={months} width="30%" className="month" />
            <Dropdown options={days} width="30%" className="day" />
          </DropdownWrapper>
        </Wrapper>
      </Section>
      <Section className="tel">
        <Wrapper className="tel">
          <label htmlFor="tel">
            휴대폰 번호
            <Required />
          </label>
          <TelWrapper>
            <input
              type="text"
              id="tel"
              className="first"
              placeholder="010"
              name="tel1"
            />
            <input
              type="text"
              id="tel"
              className="second"
              placeholder="0000"
              name="tel2"
            />
            <input
              type="text"
              id="tel"
              className="third"
              placeholder="0000"
              name="tel3"
            />
          </TelWrapper>
        </Wrapper>
      </Section>
    </Container>
  );
};

export default Default;

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
    height: 40px;
    border: 1px solid #909090;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
  }

  &.dateOfBirth,
  &.tel {
    width: 100%;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const TelWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    min-width: 0;
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
