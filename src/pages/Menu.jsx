import styled from 'styled-components';

import facebook from '../assets/facebook-logo.png';
import x from '../assets/x-logo.png';
import instagram from '../assets/instagram-logo.png';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const nav = useNavigate();

  return (
    <Div>
      <MenuBtnDiv>
        <button onClick={() => nav('/login')}>로그인/회원가입</button>
        <Line />
        <button onClick={() => nav('/mypage/careworker')}>
          요양보호사 페이지
        </button>
        <Line />
        <button onClick={() => nav('/mypage/manager')}>관리자 페이지</button>
        <Line />
        <button>FAQ/문의하기</button>
      </MenuBtnDiv>
      <SnsDiv>
        <button>
          <img src={facebook} />
        </button>
        <button>
          <img src={x} />
        </button>
        <button>
          <img src={instagram} />
        </button>
      </SnsDiv>
    </Div>
  );
};

const Div = styled.div`
  width: calc(100% + 40px);
  height: 100vh;
  margin: 0 -20px;
  background-color: var(--green);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBtnDiv = styled.div`
  width: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  text-align: center;
  button {
    font-size: 48px;
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 100%;
  border-top: 1px solid black;
`;

const SnsDiv = styled.div`
  position: absolute;
  bottom: 20px;
  padding: 0 96px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
`;

export default Menu;
