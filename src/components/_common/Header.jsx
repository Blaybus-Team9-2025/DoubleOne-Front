import styled from 'styled-components';
import menu from '../../assets/menu.png';

const Header = ({ title }) => {
  return (
    <Div>
      <p>{title}</p>
      <img src={menu} />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  height: 66px;
  position: fixed;
  top: 0;
  transform: translateX(-20px);
  padding: 0;
  z-index: 1000;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  p {
    font-size: 24px;
    font-weight: 700;
    cursor: default;
  }
  img {
    position: fixed;
    right: 30px;
    cursor: pointer;
  }
`;

export default Header;
