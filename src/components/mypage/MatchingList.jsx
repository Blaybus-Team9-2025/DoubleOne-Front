import styled from 'styled-components';
import Card from '../_common/Card';
import bell from '../../assets/bell.png';

const MatchingList = () => {
  return (
    <Div>
      <TitleDiv>
        <p>현재 매칭중인 어르신</p>
        <img src={bell} />
      </TitleDiv>
      <CardDiv>
        <Card bg="green">
          <p>김ㅇㅇ 어르신</p>
          <p>서울시 관악구 대학동</p>
          <p>현재 3명 매칭중</p>
        </Card>
        <Card bg="green">
          <p>김ㅇㅇ 어르신</p>
          <p>서울시 관악구 대학동</p>
          <p>현재 3명 매칭중</p>
        </Card>
        <Card bg="green">
          <p>김ㅇㅇ 어르신</p>
          <p>서울시 관악구 대학동</p>
          <p>현재 3명 매칭중</p>
        </Card>
      </CardDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default MatchingList;
