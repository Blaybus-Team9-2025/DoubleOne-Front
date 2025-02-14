import styled from 'styled-components';

import Header from '../components/_common/Header';
import StaticsBoard from '../components/home/StaticsBoard';
import MenuBoard from '../components/home/MenuBoard';

const Home = () => {
  return (
    <Container>
      <Header title="GrowCare" />
      <StaticsBoard />
      <MenuBoard />
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
