import styled from 'styled-components';

import msg from '../../../assets/msg-alarm.png';
import { useNavigate } from 'react-router-dom';
import { getOptions } from '../../../util/get-options';
import { getKeyByValue } from '../../../util/getKeyByValue';

const MatchingAlarms = ({ data }) => {
  const weekdayOptions = getOptions('weekday');

  const nav = useNavigate();
  return (
    <Div>
      <p className="title">매칭 요청 알림</p>
      <List>
        <Line />
        {data.map((item, index) => {
          return (
            <ItemWrapper
              key={index}
              onClick={() => nav(`/chat/${item.chatRoomId}`)}
            >
              <img src={msg} />
              <div>
                <p>{item.centerName}에서 온 매칭 요청입니다.</p>
                <p>{item.address}</p>
                {item.seniorSchedules?.map((schedule, idx) => {
                  return (
                    <p key={idx}>
                      {getKeyByValue(weekdayOptions, schedule.day)}{' '}
                      {schedule.startTime} ~ {schedule.endTime}
                    </p>
                  );
                })}
              </div>
            </ItemWrapper>
          );
        })}
        <div></div>
      </List>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
  }
`;

const List = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Line = styled.div`
  height: calc(100% - 40px);
  position: absolute;
  border-left: 1px solid #000000;
  margin-bottom: 35px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;
  gap: 6px;
  background-color: #e5e5e5;
  width: 100%;
  padding: 15px 20px;
  border-radius: 20px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-size: 14px;
    }
  }
  img {
    width: 53px;
  }
`;

export default MatchingAlarms;
