import styled from 'styled-components';

const ScheduleItem = ({ time, content, place }) => {
  return (
    <Div>
      <Time>
        <p>⚫</p>
        <p>{time}</p>
      </Time>
      <p className="content">{content}</p>
      <p className="place">장소: {place}</p>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  background-color: #d8d8d8;

  .content {
    font-size: 20px;
  }
  .place {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Time = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  p:first-child {
    color: #a9a9a9;
    opacity: 70%;
  }
`;

export default ScheduleItem;
