import { useAtomValue } from 'jotai';
import styled from 'styled-components';
import { ManagerInfoAtom } from '../../../jotai/ManagerInfo';

import logo from '../../../assets/logo.png';

const ManagerProfile = () => {
  const managerData = useAtomValue(ManagerInfoAtom);
  return (
    <Div>
      <ImgDiv>
        <img
          src={managerData.profileImg || logo}
          className={managerData.profileImg || 'logo'}
        />
      </ImgDiv>
      <NameDiv>
        <p>{managerData.name} 님</p>
        <p>{managerData.centerName}</p>
      </NameDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ImgDiv = styled.div`
  width: 92px;
  height: 92px;
  background-color: #ffffff;
  border-radius: 15px;
  flex-shrink: 0;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    object-fit: cover;
    border: none;
    &.logo {
      width: 50%;
    }
  }
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  p:first-child {
    font-size: 32px;
    font-weight: 700;
  }
  p:last-child {
    font-size: 18px;
  }
`;

export default ManagerProfile;
