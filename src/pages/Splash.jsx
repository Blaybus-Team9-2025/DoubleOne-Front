import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import SquareButton from '../components/_common/SquareButton';

const Splash = () => {
  const nav = useNavigate();

  return (
    <Container>
      <Title>
        <p>온(溫)기가 있는 숲(林),</p>
        <p>돌봄의 따뜻한 연결이 시작됩니다.</p>
      </Title>
      <Logo>
        <img src={logo} />
      </Logo>
      <SquareButton color="green" mb="20" onClick={() => nav('/login')}>
        <p>회원가입/로그인하기</p>
      </SquareButton>
    </Container>
  );
};

export default Splash;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 100px;
`;

const Logo = styled.div`
  width: 35%;
  max-width: 150px;

  img {
    width: 100%;
    height: 100%;
  }
`;
