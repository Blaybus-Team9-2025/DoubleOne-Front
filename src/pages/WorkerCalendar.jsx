import styled from 'styled-components';
import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import Calendar from '../components/workercalendar/Calendar';

const WorkerCalendar = () => {
  return (
    <Div>
      <Header title={'나의 일정'} />
      <TitleDiv>
        <Title>000요양보호사님</Title>
        <p className="text">현재 진행중인 업무를 관리할 수 있습니다.</p>
        {/* <BtnDiv>
          <button>업무 불러오기</button>
        </BtnDiv> */}
      </TitleDiv>
      <Calendar />
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .text {
    font-size: 16px;
    color: #666666;
    margin-top: 6px;
  }
`;

export default WorkerCalendar;
