import styled from 'styled-components';

const ManagerProfile = () => {
  return (
    <Div>
      <ImgDiv>
        <img />
      </ImgDiv>
      <NameDiv>
        <p>김어스 님</p>
        <p>서울노인 복지센터</p>
      </NameDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ImgDiv = styled.div`
  width: 92px;
  height: 92px;
  background-color: #d3d3d3;
  border-radius: 15px;
  flex-shrink: 0;
  box-shadow: var(--shadow);
  img {
    width: 100%;
    object-fit: cover;
    border: none;
  }
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  p:first-child {
    font-size: 32px;
    font-weight: 700;
  }
  p:last-child {
    font-size: 18px;
  }
`;

export default ManagerProfile;
