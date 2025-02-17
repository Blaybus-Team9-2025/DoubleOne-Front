import styled from 'styled-components';
import ManagerProfile from '../components/mypage/manager/ManagerProfile';
import ManagerButtonBox from '../components/mypage/manager/ManagerButtonBox';
import ManagerMatchingList from '../components/mypage/manager/ManagerMatchingList';
import Header from '../components/_common/Header';

import chevron from '../assets/chevron-right.png';
import { useNavigate } from 'react-router-dom';
import WorkerProfile from '../components/mypage/careworker/WorkderProfile';
import WorkerButtonBox from '../components/mypage/careworker/WorkerButtonBox';
import MatchingAlarms from '../components/mypage/careworker/MatchingAlarms';

const MyPage = () => {
  const nav = useNavigate();

  const type = 'manager'; // 로그인 상태 관리 정보로 변경 예정

  return (
    <Div>
      <Header title="내 정보" />
      {type === 'manager' && (
        <div>
          <ManagerProfile />
          <button className="dashboard" onClick={() => nav('/dashboard')}>
            <p>대시보드 바로가기</p>
            <img src={chevron} />
          </button>
          <ManagerButtonBox />
          <ManagerMatchingList />
        </div>
      )}
      {type === 'careworker' && (
        <div>
          <WorkerProfile />
          <WorkerButtonBox />
          <MatchingAlarms />
        </div>
      )}
    </Div>
  );
};

const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 30px;

  .dashboard {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 15px;
    background-color: var(--blue);
    box-shadow: var(--shadow);
    color: #ffffff;
    margin-top: 40px;
    p {
      font-size: 24px;
      font-weight: 700;
    }
    img {
      -webkit-filter: brightness(0) invert(1);
      filter: brightness(0) invert(1);
      width: 24px;
      height: 24px;
      position: absolute;
      right: 20px;
    }
  }
`;

export default MyPage;
