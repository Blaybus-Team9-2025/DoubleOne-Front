import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import chevron from '../../../assets/chevron-right.png';

const ManagerButtonBox = () => {
  const nav = useNavigate();

  return (
    <Div>
      <div onClick={() => nav('/seniorinfo/register')}>
        <p>어르신 정보 등록하기</p>
        <img src={chevron} />
      </div>
      <div onClick={() => nav('/list/senior')}>
        <p>어르신 목록 확인하기</p>
        <img src={chevron} />
      </div>
      <div onClick={() => nav('/recruiting/select')}>
        <p>구인 정보 등록하기</p>
        <img src={chevron} />
      </div>
      <div onClick={() => nav('/list/recruit')}>
        <p>구인 공고 목록 확인하기</p>
        <img src={chevron} />
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  box-shadow: var(--shadow);
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 30px;
  div {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  p {
    font-size: 16px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

export default ManagerButtonBox;
