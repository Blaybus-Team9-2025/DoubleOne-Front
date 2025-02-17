import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Header from '../components/_common/Header';
import StaticsBoard from '../components/home/StaticsBoard';
import MenuBoard from '../components/home/MenuBoard';
import Calendar from '../components/workercalendar/Calendar';

const Home = () => {
  const params = useParams();
  const { type } = params;

  return (
    <Container>
      <Header title="온림 溫林" />
      {type === 'manager' ? (
        <StaticsBoard />
      ) : (
        <Div>
          <Calendar home />
        </Div>
      )}
      <MenuBoard type={type} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin-top: 100px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  margin-bottom: 60px;
`;
