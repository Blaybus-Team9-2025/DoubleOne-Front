import styled from 'styled-components';

const ScheduleItem = ({ time, content, place }) => {
  return (
    <Div>
      <Time>
        <div className="circle"></div>
        <p>{time}</p>
      </Time>
      <p className="content">{content}</p>
      <p className="place">장소: {place}</p>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
  background-color: var(--green);

  .content {
    font-size: 24px;
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
  align-items: center;
  gap: 10px;
  font-size: 14px;
  .circle {
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #a9a9a9;
  }
`;

export default ScheduleItem;
