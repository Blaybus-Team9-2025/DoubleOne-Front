import styled from 'styled-components';
import arrow from '../../assets/arrow-right.png';
import RoundButton from '../_common/RoundButton';

const SeniorProfile = () => {
  return (
    <Div>
      <Title>어르신 상세정보 보기</Title>
      <MiddleBoxDiv>
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
        </BoxDiv>
        <img src={arrow} />
      </MiddleBoxDiv>
      <BtnDiv>
        <RoundButton text={'거절'} />
        <RoundButton text={'수락'} />
      </BtnDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const MiddleBoxDiv = styled.div`
  display: flex;
  align-items: end;
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const BoxDiv = styled.div`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid black;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
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
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  margin-top: 10px;
  button {
    border: 1px solid black;
    box-shadow: none;
  }
`;

export default SeniorProfile;
