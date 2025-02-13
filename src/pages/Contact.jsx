import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import chevron from '../assets/chevron-right.png';
import Card from '../components/_common/Card';
import Header from '../components/_common/Header';
import SquareButton from '../components/_common/SquareButton';

const Contact = () => {
  const params = useParams();
  const { id } = params;

  const nav = useNavigate();

  const [select, setSelect] = useState([]);

  const handleSelect = (id) => {
    setSelect((prev) =>
      prev.includes(id) ? prev.filter((it) => it !== id) : [...prev, id]
    );
  };

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
          <Item
            bg={select.includes(1) ? 'blue' : undefined}
            onClick={() => nav(`/contact/${id}/${1}`)}
          >
            <CheckBox
              bg={select.includes(1) ? 'blue' : undefined}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(1);
              }}
            >
              <Box bg={select.includes(1) ? 'blue' : undefined} />
            </CheckBox>
            <TextDiv>
              <div>
                <p>김ㅇㅇ</p>
                <p>서울시 관악구 대학동</p>
                <p>서울복지센터 7년 근무</p>
              </div>
              <img src={chevron} />
            </TextDiv>
          </Item>
          <Item
            bg={select.includes(2) ? 'blue' : undefined}
            onClick={() => nav(`/contact/${id}/${2}`)}
          >
            <CheckBox
              bg={select.includes(2) ? 'blue' : undefined}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(2);
              }}
            >
              <Box bg={select.includes(2) ? 'blue' : undefined} />
            </CheckBox>
            <TextDiv>
              <div>
                <p>김ㅇㅇ</p>
                <p>서울시 관악구 대학동</p>
                <p>서울복지센터 7년 근무</p>
              </div>
              <img src={chevron} />
            </TextDiv>
          </Item>
          <Item
            bg={select.includes(3) ? 'blue' : undefined}
            onClick={() => nav(`/contact/${id}/${3}`)}
          >
            <CheckBox
              bg={select.includes(3) ? 'blue' : undefined}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(3);
              }}
            >
              <Box bg={select.includes(3) ? 'blue' : undefined} />
            </CheckBox>
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
      <SquareButton marginBottom={35} marginTop={35} color="blue">
        메시지 보내기
      </SquareButton>
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
  background-color: ${(props) =>
    props.bg ? 'var(--' + props.bg + ')' : '#ffffff'};
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
  background-color: ${(props) => (props.bg ? '#ffffff' : '#d9d9d9')};
  border-radius: 5px;
  margin-left: 15px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${(props) =>
    props.bg ? 'var(--' + props.bg + ')' : '#d9d9d9'};
  border-radius: 2px;
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
