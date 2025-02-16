import styled from 'styled-components';
import { useState } from 'react';

import Required from '../_common/Required';
import Dropdown from './Dropdown';
import AddInput from './AddInput';
import lightCheck from '../../assets/lightCheck.svg';
import darkCheck from '../../assets/checkCircle.svg';
import { LabelStyle } from '../../util/common-style';

const days = ['월', '화', '수', '목', '금', '토', '일'];
const times = Array.from({ length: 13 }, (_, i) => `${9 + i}:00`);

const Schedule = ({ recruiting }) => {
  const [dropdowns, setDropdowns] = useState([0]);
  const [negoYn, setNegoYn] = useState(false);

  const addDropdown = () => {
    if (dropdowns.length < 20) {
      setDropdowns((prev) => [...prev, prev.length]);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Label>근무 일정</Label>
        {!recruiting && <Required />}
        <Exp onClick={() => setNegoYn(!negoYn)}>
          <img src={negoYn ? darkCheck : lightCheck} />
          <span className={negoYn && 'nego'}>협의가능</span>
        </Exp>
      </Wrapper>
      {dropdowns.map((key) => (
        <DropdownWrapper key={key}>
          <Dropdown exp="요일" width="30%" green options={days} />
          <Dropdown exp="시작시간" width="40%" green options={times} />
          <span>~</span>
          <Dropdown exp="종료시간" width="40%" green options={times} />
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
