import styled from 'styled-components';
import Card from '../components/_common/Card';
import Header from '../components/_common/Header';

const JobList = () => {
  return (
    <Div>
      <Header title={'구인공고 목록'} />
      <div>
        <InfoWrapper>
          <p>90,897건</p>
          <select name="filter" id="filter">
            <option value={'latest'}>최신등록순</option>
            <option value={'incomplete'}>매칭 미완료순</option>
            <option value={'grade'}>요양 등급순</option>
          </select>
        </InfoWrapper>
        <CardsDiv>
          <Card bg="green">
            <p>김ㅇㅇ 어르신</p>
            <p>서울시 관악구 대학동</p>
            <p>○ 매칭중이에요</p>
          </Card>
          <Card bg="green">
            <p>김ㅇㅇ 어르신</p>
            <p>서울시 관악구 대학동</p>
            <p>○ 매칭중이에요</p>
          </Card>
          <Card bg="green">
            <p>김ㅇㅇ 어르신</p>
            <p>서울시 관악구 대학동</p>
            <p>○ 매칭중이에요</p>
          </Card>
          <Card bg="green">
            <p>김ㅇㅇ 어르신</p>
            <p>서울시 관악구 대학동</p>
            <p>● 매칭이 완료되었어요</p>
          </Card>
          <Card bg="green">
            <p>김ㅇㅇ 어르신</p>
            <p>서울시 관악구 대학동</p>
            <p>● 매칭이 완료되었어요</p>
          </Card>
          <Card bg="green">
            <p>김ㅇㅇ 어르신</p>
            <p>서울시 관악구 대학동</p>
            <p>● 매칭이 완료되었어요</p>
          </Card>
        </CardsDiv>
      </div>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 13px;
  margin-bottom: 13px;
  p {
    font-size: 18px;
    font-weight: 700;
  }
  select {
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 16px;
  }
`;

const CardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .circle {
    width: 14px;
    height: 14px;
  }
`;

export default JobList;
