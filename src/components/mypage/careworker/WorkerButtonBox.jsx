import styled from 'styled-components';

import file from '../../../assets/file.png';
import arrow from '../../../assets/arrow-lf.png';
import calendar from '../../../assets/black-calendar.png';
import { useNavigate } from 'react-router-dom';

const WorkerButtonBox = () => {
  const nav = useNavigate();

  return (
    <Div>
      <Button onClick={() => nav('/careworkerinfo/1')}>
        <img src={file} />
        <p>이력 관리</p>
      </Button>
      <Line />
      <Button onClick={() => nav('/history')}>
        <img src={arrow} />
        <p>매칭 기록</p>
      </Button>
      <Line />
      <Button onClick={() => nav('/calendar')}>
        <img src={calendar} />
        <p>나의 일정</p>
      </Button>
    </Div>
  );
};

const Div = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 90px;
  border-radius: 20px;
  background-color: var(--green);
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  height: 60px;
  border-left: 1px solid black;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  img {
    width: 24px;
    height: 24px;
  }
  p {
    font-size: 14px;
  }
`;

export default WorkerButtonBox;
