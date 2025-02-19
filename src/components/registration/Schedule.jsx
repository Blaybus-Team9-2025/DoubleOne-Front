import styled from 'styled-components';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import Dropdown from './Dropdown';
import AddInput from './AddInput';
import lightCheck from '../../assets/lightCheck.svg';
import darkCheck from '../../assets/checkCircle.svg';
import { LabelStyle } from '../../util/common-style';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';
import { getOptions } from '../../util/get-options';

const weekdayOptions = getOptions('weekday');
const weekdayMap = Object.assign({}, ...weekdayOptions);
const weekdayTypes = Object.keys(weekdayMap);

const times = Array.from({ length: 13 }, (_, i) => `${9 + i}:00`);

const Schedule = ({ recruiting }) => {
  const [input, setInput] = useAtom(CareworkerConditionsAtom);

  const addDropdown = () => {
    if (input.scheduleDtoList.length < 20) {
      setInput((prev) => ({
        ...prev,
        scheduleDtoList: [
          ...prev.scheduleDtoList,
          { day: '', startTime: '', endTime: '' },
        ],
      }));
    }
  };

  const updateSchedule = (index, field, value) => {
    setInput((prev) => ({
      ...prev,
      scheduleDtoList: prev.scheduleDtoList.map((schedule, i) =>
        i === index
          ? {
              ...schedule,
              [field]: field === 'day' ? weekdayMap[value] ?? value : value,
            }
          : schedule
      ),
    }));
  };

  const onChangeDiscuss = () => {
    setInput((prev) => ({
      ...prev,
      discuss: !prev.discuss,
    }));
  };

  return (
    <Container>
      <Wrapper>
        <Label>근무 일정</Label>
        {!recruiting && <Required />}
        <Exp onClick={() => onChangeDiscuss()}>
          <img src={input?.discuss ? darkCheck : lightCheck} />
          <span className={input?.discuss && 'nego'}>협의가능</span>
        </Exp>
      </Wrapper>
      {input.scheduleDtoList.map((schedule, index) => (
        <DropdownWrapper key={index}>
          <Dropdown
            exp="요일"
            width="30%"
            green
            options={weekdayTypes}
            value={
              Object.keys(weekdayOptions).find(
                (key) => weekdayOptions[key] === schedule.day
              ) || ''
            }
            onChange={(val) => updateSchedule(index, 'day', val)}
          />
          <Dropdown
            exp="시작시간"
            width="40%"
            green
            options={times}
            value={schedule.startTime}
            onChange={(val) => updateSchedule(index, 'startTime', val)}
          />
          <span>~</span>
          <Dropdown
            exp="종료시간"
            width="40%"
            green
            options={times}
            value={schedule.endTime}
            onChange={(val) => updateSchedule(index, 'endTime', val)}
          />
        </DropdownWrapper>
      ))}
      <AddInput onClick={addDropdown} />
    </Container>
  );
};

export default Schedule;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Exp = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-size: 12px;
  color: var(--grey);
  cursor: pointer;

  position: relative;
  bottom: 4px;

  img {
    position: relative;
    top: 2px;
  }

  .nego {
    color: black;
  }
`;

const DropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;

  span {
    color: var(--green);
    font-weight: bold;
    font-size: 20px;
  }
`;
