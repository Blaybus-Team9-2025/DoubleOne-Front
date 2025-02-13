import styled from 'styled-components';

const Profile = () => {
  return (
    <Div>
      <ImgDiv>
        <img />
      </ImgDiv>
      <Name>김어스, 요양보호사 1급</Name>
      <ItemDiv>
        <div>
          <p>83%</p>
          <p>매칭률</p>
        </div>
        <div>
          <p>83%</p>
          <p>매칭률</p>
        </div>
        <div>
          <p>83%</p>
          <p>매칭률</p>
        </div>
      </ItemDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const ImgDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: #d9d9d9;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const ItemDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    width: 100px;
    height: 100px;
    background-color: var(--green);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  p:first-child {
    font-size: 24px;
    font-weight: 700;
  }
  p:last-child {
    position: absolute;
    bottom: 10px;
    font-size: 12px;
    opacity: 50%;
  }
`;

export default Profile;
