import styled from 'styled-components';
import Header from '../components/_common/Header';
import Profile from '../components/careworkerdetail/Profile';
import Slick from '../components/careworkerdetail/Slick';
import SquareButton from '../components/_common/SquareButton';

const CareWorkerDetail = () => {
  return (
    <Div>
      <Header title="(프로필/약속잡기)" />
      <Profile />
      <Slick />
      <SquareButton marginBottom={35} color="blue">
        메시지 보내기
      </SquareButton>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
`;

export default CareWorkerDetail;
