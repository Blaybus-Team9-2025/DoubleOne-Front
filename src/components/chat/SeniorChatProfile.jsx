import styled from 'styled-components';

import arrow from '../../assets/arrow-right.png';

const SeniorChatProfile = ({ isAccepted }) => {
  return (
    <Div>
      <Title>어르신 상세정보 보기</Title>
      <BoxDiv>
        <Content>
          <p className="dot">성별: 여</p>
          <p className="dot">나이: 78세</p>
          <p className="dot">요양등급: 2급</p>
        </Content>
        <Content>
          <div>
            <p className="dot bold">근무지역</p>
            <p>서울특별시 관악구 대학동</p>
          </div>
          <div>
            <p className="dot bold">근무시간</p>
            <p>월 14:00-15:00</p>
          </div>
          <div>
            <p className="dot bold">근무종류</p>
            <p>방문요양</p>
          </div>
        </Content>
        <div className="icon">
          <img src={arrow} />
        </div>
      </BoxDiv>
      {isAccepted ?? (
        <BtnDiv>
          <button>거절</button>
          <button>수락</button>
        </BtnDiv>
      )}
      <div className="margin" />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  .margin {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const BoxDiv = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background-color: var(--green);
  border-radius: 10px;
  .icon {
    display: flex;
    align-items: end;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  p {
    padding-left: 20px;
    position: relative;
  }
  .dot::before {
    content: '●';
    position: absolute;
    left: 8px;
    top: 5px;
    font-size: 5px;
  }
  .bold {
    font-weight: 700;
  }
`;

const BtnDiv = styled.div`
  width: 100%px;
  display: flex;
  gap: 10px;
  margin-top: 10px;
  button {
    border: 1px solid black;
    padding: 3px 0;
    width: 100%;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default SeniorChatProfile;
