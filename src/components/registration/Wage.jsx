import styled from 'styled-components';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import Dropdown from './Dropdown';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getMonthlyPay } from '../../util/get-monthly-wage';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';
import { RecruitingInfoAtom } from '../../jotai/Recruiting';
import { getOptions } from '../../util/get-options';
import { useEffect, useMemo, useState } from 'react';

// 한글 ↔ 영어 매핑
const wageOptions = getOptions('wageType'); // [{ 시급: 'HOURLY' }, { 일급: 'DAILY' }, ... ]
const wageMap = Object.assign({}, ...wageOptions); // { "시급": "HOURLY", "일급": "DAILY", ... }
const reverseWageMap = Object.fromEntries(
  Object.entries(wageMap).map(([kor, eng]) => [eng, kor])
);

const wageTypes = Object.keys(wageMap);

const Wage = ({ recruiting }) => {
  const atom = useMemo(
    () => (recruiting ? RecruitingInfoAtom : CareworkerConditionsAtom),
    [recruiting]
  );
  const [input, setInput] = useAtom(atom);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (input?.wage) {
      if (input?.wageType) {
        setAmount(getMonthlyPay(input.wageType, input.wage));
      } else if (input?.payType) {
        setAmount(getMonthlyPay(input.payType, input.wage));
      }
    }
  }, [input?.wage, input?.wageType, input?.payType]);

  useEffect(() => {
    if (recruiting) {
      setInput((prev) => ({ ...prev, amount: amount }));
    }
  }, [amount]);

  // 한글 → 영어 변환하여 wageType 저장
  const updateWageType = (selected) => {
    if (recruiting) {
      setInput((prev) => ({
        ...prev,
        payType: wageMap[selected] || selected,
      }));
    } else {
      setInput((prev) => ({
        ...prev,
        wageType: wageMap[selected] || selected,
      }));
    }
  };

  const onChangeWage = (e) => {
    setInput((prev) => ({
      ...prev,
      wage: e.target.value,
    }));
  };

  return (
    <Container>
      <div>
        <Label>{recruiting ? '근무 조건' : '희망 시급'}</Label>
        {!recruiting && <Required />}
      </div>
      <Wrapper>
        <Dropdown
          width="25%"
          init={reverseWageMap[input?.wageType] || '시급'}
          options={wageTypes}
          onChange={updateWageType}
        />
        <InputWrapper>
          <Input value={input?.wage} onChange={onChangeWage} />
          <Unit>원</Unit>
        </InputWrapper>
        {input?.wageType !== 'PER_TASK' && (
          <MonthlyPay>
            <p>(월급: {amount.toLocaleString()} ₩)</p>
          </MonthlyPay>
        )}
      </Wrapper>
      <Exp>최저임금(13,000원)이상 금액부터 입력이 가능합니다.</Exp>
    </Container>
  );
};

export default Wage;

// 스타일 정의
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
