import { useNavigate } from 'react-router-dom';
import ManagerButtonBox from './manager/ManagerButtonBox';
import ManagerMatchingList from './manager/ManagerMatchingList';
import ManagerProfile from './manager/ManagerProfile';

import chevron from '../../assets/chevron-right.png';
import styled from 'styled-components';

const ManagerMyPage = () => {
  const nav = useNavigate();

  return (
    <div>
      <ManagerProfile />
      <DashboardDiv onClick={() => nav('/dashboard')}>
        <p>대시보드 바로가기</p>
        <img src={chevron} />
      </DashboardDiv>
      <ManagerButtonBox />
      <ManagerMatchingList />
    </div>
  );
};

const DashboardDiv = styled.button`
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
`;

export default ManagerMyPage;
