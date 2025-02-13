import styled from 'styled-components';
import Header from '../components/_common/Header';
import Profile from '../components/careworkerdetail/Profile';
import Slick from '../components/careworkerdetail/Slick';

const CareWorkerDetail = () => {
  return (
    <Div>
      <Header title="(프로필/약속잡기)" />
      <Profile />
      <Slick />
      <MsgBtn>메시지 보내기</MsgBtn>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
`;

const MsgBtn = styled.button`
  width: 100%;
  margin-bottom: 35px;
  background-color: var(--blue);
  font-size: 18px;
  font-weight: 700;
  padding: 18px 0;
  border-radius: 15px;
  box-shadow: var(--shadow);
  cursor: pointer;
`;

export default CareWorkerDetail;
