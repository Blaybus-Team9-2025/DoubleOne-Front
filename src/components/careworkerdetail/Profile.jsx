import styled from 'styled-components';

const Profile = () => {
  return (
    <Div>
      <ImgDiv>
        <img />
      </ImgDiv>
      <ItemDiv>
        <div>
          <img />
        </div>
        <div>
          <p>김어스, 요양보호사 1급</p>
          <p>매칭률 83%</p>
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
  height: 100px;
  background-color: var(--green);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 13px;
  gap: 13px;

  div:first-child {
    width: 75px;
    height: 75px;
    border-radius: 10px;
    background-color: white;
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  p:first-child {
    font-size: 18px;
    font-weight: 700;
  }
  p:last-child {
    font-size: 16px;
    font-weight: 700;
    opacity: 50%;
  }
`;

export default Profile;
