import styled from 'styled-components';

import Header from '../components/_common/Header';
import { CheckboxStyle } from '../util/common-style';
import { getOptions } from '../util/get-options';

const SeniorSpecifics = () => {
  return (
    <Container>
      <Header title="어르신 정보" />
      <Wrapper>
        <Title>개인 정보</Title>
        <ImgWrapper>
          <img src="" />
        </ImgWrapper>
        <Div>
          <FixedWrapper>
            <Key className="name">이름</Key>
            <Val>김어스</Val>
          </FixedWrapper>
          <FixedWrapper>
            <Key>성별</Key>
            <Val>여</Val>
          </FixedWrapper>
        </Div>
        <FixedWrapper>
          <Key>생년월일</Key>
          <Val>1985년 2월 15일</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>장기요양등급</Key>
          <Val>1급</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>어르신 몸무게</Key>
          <Val>51kg</Val>
        </FixedWrapper>
        <ItemWrapper>
          <Key>치매 증상</Key>
          {getOptions('dementia').map((val, idx) => (
            <CheckboxWrapper key={idx}>
              <CheckBox disabled />
              <label>{val}</label>
            </CheckboxWrapper>
          ))}
        </ItemWrapper>
        <FixedWrapper>
          <Key>기타 보유 질병/질환</Key>
          <Val>없음</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>주소</Key>
          <Val>서울특별시 마포구 합정동</Val>
        </FixedWrapper>
        <ItemWrapper>
          <Key>동거인 여부</Key>
          {getOptions('cohabitation').map((val, idx) => (
            <CheckboxWrapper key={idx}>
              <CheckBox disabled />
              <label>{val}</label>
            </CheckboxWrapper>
          ))}
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default SeniorSpecifics;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const ImgWrapper = styled.div`
  width: 70%;
  min-height: 200px;
  max-height: 500px;
  border: 1px solid black;
`;

const Div = styled.div`
  display: flex;
`;

const FixedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Key = styled.p`
  font-size: 16px;
  color: var(--grey);

  &.name {
    margin-right: 200px;
  }
`;

const Val = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  ${CheckboxStyle}
`;
