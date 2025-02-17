import { Outlet } from 'react-router-dom';
import Header from '../components/_common/Header';
import styled from 'styled-components';

const Dashboard = () => {
  return (
    <Div>
      <Header title={'온림 溫林'} />
      <Outlet />
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
`;

export default Dashboard;
