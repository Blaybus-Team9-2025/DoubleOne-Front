import styled from 'styled-components';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';

import Required from '../_common/Required';
import Dropdown from './Dropdown';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import {
  EmailWorkerSignupAtom,
  EmailManagerSignupAtom,
  KakaoManagerSignupAtom,
  KakaoWorkerSignupAtom,
} from '../../jotai/Signup';
import { SeniorInfoAtom } from '../../jotai/SeniorInfo';

const years = Array.from(
  { length: 2025 - 1930 + 1 },
  (_, i) => `${2025 - i}년`
);
const months = Array.from({ length: 12 - 1 + 1 }, (_, i) => `${1 + i}월`);
const days = Array.from({ length: 31 - 1 + 1 }, (_, i) => `${1 + i}일`);

const BirthDate = ({ type, target, error }) => {
  console.log(type, target);
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

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    if (year && month && day) {
      // '년', '월', '일' 제거
      const newYear = year.replace(/[^\d]/g, '');
      const newMonth = month.replace(/[^\d]/g, '').padStart(2, '0');
      const newDay = day.replace(/[^\d]/g, '').padStart(2, '0');

      let newBirthDate = `${newYear}-${newMonth}-${newDay}`;

      setInput((prev) => ({
        ...prev,
        birthDate: newBirthDate,
      }));
    }
  }, [year, month, day]);

  return (
    <Container>
      <Wrapper>
        <div>
          <Label>생년월일</Label>
          <Required />
        </div>
        <DropdownWrapper>
          <Dropdown
            options={years}
            width="40%"
            value={input.birthDate?.split('-')[0] + '년'}
            onChange={setYear}
            target="year"
            error={error ? true : undefined}
          />
          <Dropdown
            options={months}
            width="30%"
            value={parseInt(input.birthDate?.split('-')[1], 10) + '월' || ''}
            onChange={setMonth}
            error={error ? true : undefined}
          />
          <Dropdown
            options={days}
            width="30%"
            value={parseInt(input.birthDate?.split('-')[2], 10) + '일' || ''}
            onChange={setDay}
            error={error ? true : undefined}
          />
        </DropdownWrapper>
      </Wrapper>
    </Container>
  );
};

export default BirthDate;

const Container = styled.section``;

const Label = styled.label`
  ${LabelStyle}
`;

const DropdownWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

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
