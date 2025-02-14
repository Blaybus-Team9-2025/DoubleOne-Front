import styled from "styled-components";

const HeaderContainer = styled.div`
  align-self: stretch;
  background: #ffffff;
  padding-bottom: 21px;
  margin-bottom: 27px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
`;

const StatusBar = styled.div`
  align-self: stretch;
  background: #f5f5f5;
  height: 24px;
  margin-bottom: 19px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin: 0 27px;
`;

const Title = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <StatusBar />
      <HeaderContent>
        <Title>{title}</Title>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
