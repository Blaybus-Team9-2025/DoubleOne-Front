import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '../components/_common/Header';

const MyPage = () => {
  return (
    <Div>
      <Header title="내 정보" />
      <Outlet />
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
`;

export default MyPage;
