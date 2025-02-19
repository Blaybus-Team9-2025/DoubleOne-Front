import { useNavigate } from 'react-router-dom';
import ManagerButtonBox from './manager/ManagerButtonBox';
import ManagerMatchingList from './manager/ManagerMatchingList';
import ManagerProfile from './manager/ManagerProfile';

import chevron from '../../assets/chevron-right.png';
import styled from 'styled-components';
import { useAtomValue, useSetAtom } from 'jotai';
import { ManagerInfoAtom } from '../../jotai/ManagerInfo';
import { useEffect } from 'react';
import { LoginAtom } from '../../jotai/Login';
import { getManagerInfo } from '../../api/manager';

const ManagerMyPage = () => {
  const setManagerInfo = useSetAtom(ManagerInfoAtom);
  const { managerId } = useAtomValue(LoginAtom);

  useEffect(() => {
    const getData = async () => {
      const res = await getManagerInfo(managerId);
      if (res?.data) {
        setManagerInfo(res.data);
      }
    };

    console.log(managerId);
    if (managerId > 0) {
      getData();
    }
  }, [managerId]);

  const nav = useNavigate();

  return (
    <div>
      <ManagerProfile />
      <ButtonDiv>
        <button>개인정보 수정하기</button>
        <button onClick={() => nav(`/editcenterinfo/${1}`)}>
          센터정보 수정하기
        </button>
      </ButtonDiv>
      <DashboardDiv onClick={() => nav('/dashboard')}>
        <p>대시보드 바로가기</p>
        <img src={chevron} />
      </DashboardDiv>
      <ManagerButtonBox />
      <ManagerMatchingList />
    </div>
  );
};

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  padding-top: 20px;
  button {
    width: 100%;
    font-size: 16px;
    padding: 2px 14px;
    border-radius: 20px;
    background-color: #e5e5e5;
  }
`;

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
  margin-top: 20px;
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
