import styled from 'styled-components';
import SquareButton from '../_common/SquareButton';

const MenuBoard = () => {
  return (
    <Container>
      <Header>
        <ProfileWrapper>
          <ProfileImg>
            <img src="/" />
          </ProfileImg>
          <ProfileInfo>
            <p className="name">얼리 님</p>
            <p className="role">관리자</p>
          </ProfileInfo>
        </ProfileWrapper>
        <Icon></Icon>
      </Header>
      <ButtonWrapper>
        <SquareButton color="white">
          <p>어르신 등록하기</p>
        </SquareButton>
        <SquareButton color="blue">
          <p>요양보호사로 등록하기</p>
        </SquareButton>
      </ButtonWrapper>
    </Container>
  );
};

export default MenuBoard;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--green);
  border-radius: 20px 20px 0 0;
  padding: 30px;
  padding-bottom: 60px;
  margin: 0 -20px;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 10px;
  width: 10px;
  background-color: white;
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  margin-right: 15px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .name {
    font-weight: bold;
    font-size: 18px;
  }

  .role {
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    font-size: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
