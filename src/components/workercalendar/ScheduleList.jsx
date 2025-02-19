import styled from 'styled-components';
import ScheduleItem from './ScheduleItem';

const ScheduleList = ({ date }) => {
  const mockData = [
    {
      time: '08:30~09:30',
      content: '요양사 면접',
      place: '서울특별시 중구 세종대로 110',
    },
    {
      time: '09:30~10:30',
      content: '식사 보조',
      place: '서울특별시 종로구 사직로 161',
    },
    {
      time: '11:30~14:30',
      content: '목욕 보조',
      place: '서울특별시 용산구 한강대로 405',
    },
    {
      time: '18:30~20:30',
      content: '식사 보조',
      place: '서울특별시 서대문구 대현동',
    },
  ];
  return (
    <Div>
      <p className="title">오늘의 일정</p>
      {mockData.map((item, index) => {
        return (
          <ScheduleItem
            key={index}
            time={item.time}
            content={item.content}
            place={item.place}
          />
        );
      })}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 15px 0;
  .title {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export default ScheduleList;
