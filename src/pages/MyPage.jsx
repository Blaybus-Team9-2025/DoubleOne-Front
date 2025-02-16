import styled from 'styled-components';
import Profile from '../components/mypage/Profile';
import ButtonBox from '../components/mypage/ButtonBox';
import MatchingList from '../components/mypage/MatchingList';
import Header from '../components/_common/Header';

import chevron from '../assets/chevron-right.png';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const nav = useNavigate(); // 대시보드 이동 추가 예정

  return (
    <Div>
      <Header title="내 정보" />
      <Profile />
      <button className="dashboard">
        <p>대시보드 바로가기</p>
        <img src={chevron} />
      </button>
      <ButtonBox />
      <MatchingList />
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
