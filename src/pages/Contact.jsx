import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import chevron from '../assets/chevron-right.png';
import Card from '../components/_common/Card';
import Header from '../components/_common/Header';

const Contact = () => {
  const params = useParams();
  const { id } = params;

  const nav = useNavigate();

  return (
    <div style={{ marginTop: '100px' }}>
      <Header title="GrowCare" />
      <Card bg="green">
        <p>김ㅇㅇ 어르신</p>
        <p>서울시 관악구 대학동</p>
        <p>현재 3명 매칭중</p>
      </Card>
      <ListDiv>
        <Title>요양보호사를 선택해주세요</Title>
        <ItemWrapper>
          <Item onClick={() => nav(`/contact/${id}/${1}`)}>
            <CheckBox />
            <TextDiv>
              <div>
                <p>김ㅇㅇ</p>
                <p>서울시 관악구 대학동</p>
                <p>서울복지센터 7년 근무</p>
              </div>
              <img src={chevron} />
            </TextDiv>
          </Item>
          <Item onClick={() => nav(`/contact/${id}/${2}`)}>
            <CheckBox />
            <TextDiv>
              <div>
                <p>김ㅇㅇ</p>
                <p>서울시 관악구 대학동</p>
                <p>서울복지센터 7년 근무</p>
              </div>
              <img src={chevron} />
            </TextDiv>
          </Item>
          <Item onClick={() => nav(`/contact/${id}/${3}`)}>
            <CheckBox />
            <TextDiv>
              <div>
                <p>김ㅇㅇ</p>
                <p>서울시 관악구 대학동</p>
                <p>서울복지센터 7년 근무</p>
              </div>
              <img src={chevron} />
            </TextDiv>
          </Item>
        </ItemWrapper>
      </ListDiv>
    </div>
  );
};

const ListDiv = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const Item = styled.div`
  width: 100%;
  height: 98px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
`;

const CheckBox = styled.div`
  width: 34px;
  height: 34px;
  background-color: #d9d9d9;
  border-radius: 5px;
  margin-left: 15px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 12px;
  }
  p:first-child {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

export default Contact;
