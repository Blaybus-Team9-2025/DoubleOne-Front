import styled from 'styled-components';
import ManagerProfile from '../components/mypage/manager/ManagerProfile';
import ManagerButtonBox from '../components/mypage/manager/ManagerButtonBox';
import MatchingList from '../components/mypage/manager/MatchingList';
import Header from '../components/_common/Header';

import chevron from '../assets/chevron-right.png';
import { useNavigate } from 'react-router-dom';
import WorkerProfile from '../components/mypage/careworker/WorkderProfile';
import WorkerButtonBox from '../components/mypage/careworker/WorkerButtonBox';
import MatchingAlarms from '../components/mypage/careworker/MatchingAlarms';

const MyPage = () => {
  const nav = useNavigate(); // 대시보드 이동 추가 예정

  const type = 'manager'; // 로그인 상태 관리 정보로 변경 예정

  return (
    <Div>
      <Header title="내 정보" />
      {type === 'manager' && (
        <div>
          <ManagerProfile />
          <button className="dashboard">
            <p>대시보드 바로가기</p>
            <img src={chevron} />
          </button>
          <ManagerButtonBox />
          <MatchingList />
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
    height: 83px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 15px;
    background-color: var(--blue);
    box-shadow: var(--shadow);
    margin-top: 40px;
    p {
      font-size: 18px;
      font-weight: 700;
    }
    img {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 20px;
    }
  }
`;

export default MyPage;
