import styled from 'styled-components';

import defaultImg from '../../assets/logo.png';

const Profile = ({ profile, logo, name, cert }) => {
  return (
    <Div>
      <ImgDiv>
        <img src={profile || defaultImg} className={profile || 'logo'} />
      </ImgDiv>
      <ItemDiv>
        <div>
          <img src={logo} />
        </div>
        <div>
          <p className="name">
            {name}, {cert}
          </p>
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
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);
  img {
    width: 100%;
    object-fit: cover;
    &.logo {
      width: 50%;
    }
  }
`;

const ItemDiv = styled.div`
  width: 100%;
  height: 65px;
  background-color: var(--blue);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 13px;
  gap: 30px;

  div:first-child {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    flex-shrink: 0;
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
`;

export default Profile;
