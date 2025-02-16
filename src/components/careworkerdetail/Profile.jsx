import styled from 'styled-components';

const Profile = ({ profile, logo, name, cert, percentage }) => {
  return (
    <Div>
      <ImgDiv>
        <img src={profile} />
      </ImgDiv>
      <ItemDiv>
        <div>
          <img src={logo} />
        </div>
        <div>
          <p className="name">
            {name}, {cert}
          </p>
          <p className="percentage">매칭률 {percentage}%</p>
        </div>
      </ItemDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const ImgDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  background-color: #d9d9d9;
  img {
    width: 100%;
    object-fit: cover;
  }
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

  .name {
    font-size: 18px;
    font-weight: 700;
  }
  .percentage {
    font-size: 16px;
    font-weight: 700;
    opacity: 50%;
  }
`;

export default Profile;
