import styled from 'styled-components';
import { useState } from 'react';

import Required from '../_common/Required';
import Dropdown from './Dropdown';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getMonthlyPay } from '../../util/get-monthly-wage';

const units = ['시급', '일급', '월급', '연봉', '건당'];

const Wage = ({ recruiting }) => {
  const [unit, setUnit] = useState('시급');
  const [wage, setWage] = useState('');

  return (
    <Container>
      <div>
        <Label>{recruiting ? '근무 조건' : '희망 시급'}</Label>
        {!recruiting && <Required />}
      </div>
      <Wrapper>
        <Dropdown width="25%" init="시급" options={units} onChange={setUnit} />
        <InputWrapper>
          <Input value={wage} onChange={(e) => setWage(e.target.value)} />
          <Unit>원</Unit>
        </InputWrapper>
        {unit !== '건당' && (
          <MonthlyPay>
            <p>(월급: {getMonthlyPay(unit, wage).toLocaleString()} ₩)</p>
          </MonthlyPay>
        )}
      </Wrapper>
      <Exp>최저임금(13,000원)이상 금액부터 입력이 가능합니다.</Exp>
    </Container>
  );
};

export default Wage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InputWrapper = styled.div`
  width: 40%;
  position: relative;
`;

const Unit = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: var(--grey);
  user-select: none;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Input = styled.input`
  width: 100%;
  ${InputStyle}
`;

const MonthlyPay = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: end;
  user-select: none;
`;

const Exp = styled.p`
  font-size: 12px;
  text-align: center;
  user-select: none;
  margin-top: -3px;
`;
