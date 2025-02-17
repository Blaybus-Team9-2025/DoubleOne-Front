import styled from 'styled-components';

import msg from '../../../assets/msg-alarm.png';
import { useNavigate } from 'react-router-dom';

const mock = [
  {
    from: '00복지센터',
    place: '서울특별시 마포구 합정동',
    time: '월수금(오후 12~6시)',
    work: '일상보조',
  },
  {
    from: 'ㅁㅁ복지센터',
    place: '서울특별시 경기도 제주도',
    time: '월수금(오후 12~6시)',
    work: '일상보조',
  },
  {
    from: '네모복지센터',
    place: '부산광역시 대구동',
    time: '월수금(오후 12~6시)',
    work: '일상보조',
  },
  {
    from: '00복지센터',
    place: '서울특별시 마포구 합정동',
    time: '화목(오후 12~6시)',
    work: '식사보조',
  },
  {
    from: '00복지센터',
    place: '서울특별시 마포구 합정동',
    time: '화목(오후 12~6시)',
    work: '식사보조',
  },
  {
    from: '00복지센터',
    place: '서울특별시 마포구 합정동',
    time: '화목(오후 12~6시)',
    work: '식사보조',
  },
];

const MatchingAlarms = () => {
  const nav = useNavigate();
  return (
    <Div>
      <p className="title">매칭 요청 알림</p>
      <List>
        <Line />
        {mock.map((item, index) => {
          return (
            <ItemWrapper key={index} onClick={() => nav(`/chat/${index}`)}>
              <img src={msg} />
              <div>
                <p>{item.from}에서 온 매칭 요청입니다.</p>
                <p>{item.place}</p>
                <p>
                  {item.time} · {item.work}
                </p>
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
