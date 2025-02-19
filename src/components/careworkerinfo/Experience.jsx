import styled from 'styled-components';
import { useState } from 'react';
import { useAtom } from 'jotai';

import { InputStyle } from '../../util/common-style';
import infoCircle from '../../assets/info-circle.png';
import calendar from '../../assets/calendar.png';
import AddInput from '../registration/AddInput';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';

const Experience = () => {
  const [experiences, setExperiences] = useState([{ id: 0, currentYn: false }]);
  const [infoYn, setInfoYn] = useState(false);
  const [input, setInput] = useAtom(CareworkerConditionsAtom);

  console.log(input.workPeriods);

  // 경력 입력 추가
  const addInput = () => {
    setExperiences((prev) => [...prev, { id: prev.length, currentYn: false }]);
  };

  // 체크박스 상태 변경 (현재 이 업무로 근무중)
  const toggleCheckbox = (index) => {
    setInput((prev) => {
      const updatedWorkPeriods = prev.workPeriods.map((workPeriod, i) =>
        i === index
          ? {
              ...workPeriod,
              current: !workPeriod.current,
              // 현재 이 업무로 근무중이면 종료일 리셋
              endDate: !workPeriod.current ? '' : workPeriod.endDate,
            }
          : workPeriod
      );

      return {
        ...prev,
        workPeriods: updatedWorkPeriods,
      };
    });
  };

  const handleInputChange = (index, field, value) => {
    setInput((prev) => {
      const updatedWorkPeriods = prev.workPeriods.map((workPeriod, i) =>
        i === index
          ? { ...workPeriod, [field]: value } // 수정된 경력 항목 업데이트
          : workPeriod
      );

      // 새로운 경력 항목 추가
      if (index === prev.workPeriods.length) {
        updatedWorkPeriods.push({ [field]: value, current: false });
      }

      return {
        ...prev,
        workPeriods: updatedWorkPeriods,
      };
    });
  };

  return (
    <Container>
      <LabelWrapper>
        <Label>주요경력</Label>
        <img src={infoCircle} onClick={() => setInfoYn(!infoYn)} />
        {infoYn && (
          <span className="info">매칭에 필수적으로 활용되는 정보입니다.</span>
        )}
      </LabelWrapper>
      {experiences.map(({ id, currentYn }, index) => (
        <Wrapper key={id}>
          <Input
            placeholder="직함"
            value={input.workPeriods[index]?.title || ''}
            onChange={(e) => handleInputChange(index, 'title', e.target.value)} // 직함 변경
          />
          <Input
            placeholder="기관 또는 단체"
            value={input.workPeriods[index]?.organization || ''}
            onChange={(e) =>
              handleInputChange(index, 'organization', e.target.value)
            }
          />
          <Check>
            <input
              type="checkbox"
              checked={input.workPeriods[index]?.current || false}
              onChange={() => toggleCheckbox(index)} // 체크박스 상태 변경
            />
            <p>현재 이 업무로 근무중</p>
          </Check>
          <InputWrapper>
            <input
              type="date"
              placeholder="시작일"
              required
              aria-required="true"
              value={input.workPeriods[index]?.startDate || ''}
              onChange={
                (e) => handleInputChange(index, 'startDate', e.target.value) // 시작일 변경
              }
            />
            <input
              type="date"
              placeholder="종료일"
              required
              aria-required="true"
              disabled={input.workPeriods[index]?.current}
              value={input.workPeriods[index]?.endDate || ''}
              onChange={
                (e) => handleInputChange(index, 'endDate', e.target.value) // 종료일 변경
              }
            />
          </InputWrapper>
        </Wrapper>
      ))}
      <AddInput onClick={addInput} />
    </Container>
  );
};

export default Experience;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;

  .info {
    color: var(--grey);
    font-size: 12px;
    margin-left: 3px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  margin-right: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  ${InputStyle}
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  input {
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid var(--grey);
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;

  input[type='date'] {
    position: relative;
    width: 100%;
    height: 45px;
    padding: 15px 20px;
    font-size: 14px;
    background: url(${calendar}) no-repeat right 15px center / 20px auto;
    text-align: left;
    border: 1px solid var(--grey);
    border-radius: 5px;
  }

  // 캘린더 아이콘 영역
  input[type='date']::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }

  // placeholder 커스터마이징
  input[type='date']::before {
    content: attr(placeholder);
    color: var(--grey);
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }

  input[type='date']:not(:focus):invalid {
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field {
      -webkit-appearance: none;
      display: none;
    }
  }

  // 날짜를 선택하면 유효값이 입력된다
  input[type='date']:focus::before,
  input[type='date']:valid::before {
    display: none;
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field {
      -webkit-appearance: none;
      display: none;
    }
  }

  // Disabled 상태에서 숨기기
  input[type='date']:disabled {
    opacity: 0;
  }
`;
