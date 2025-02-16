import styled from 'styled-components';
import { useState } from 'react';

import { InputStyle } from '../../util/common-style';
import infoCircle from '../../assets/info-circle.png';
import calendar from '../../assets/calendar.png';
import AddInput from '../registration/AddInput';

const Experience = () => {
  const [experiences, setExperiences] = useState([0]);
  const [currentYn, setCurrentYn] = useState(false);
  const [infoYn, setInfoYn] = useState(false);

  const addInput = () => {
    setExperiences((prev) => [...prev, prev.length]);
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
      {experiences.map((key) => (
        <Wrapper key={key}>
          <Input placeholder="직함" />
          <Input placeholder="기관 또는 단체" />
          <Check>
            <input
              type="checkbox"
              checked={currentYn}
              onChange={() => setCurrentYn(!currentYn)}
            />
            <p>현재 이 업무로 근무중</p>
          </Check>
          <InputWrapper>
            <input
              type="date"
              placeholder="시작일"
              required
              aria-required="true"
            />
            <input
              type="date"
              placeholder="종료일"
              required
              aria-required="true"
              disabled={currentYn}
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
