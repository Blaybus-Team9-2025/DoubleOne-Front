import styled from 'styled-components';

import Header from '../components/_common/Header';
import { CheckboxStyle } from '../util/common-style';
import { getOptions } from '../util/get-options';

const RecruitingSpecifics = () => {
  return (
    <Container>
      <Header title="구인 정보" />
      <Wrapper>
        <Title>어르신 정보</Title>
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
          <Key>선호 요양사 성별</Key>
          <CheckBoxRow>
            <div>
              <CheckBox disabled />
              <label>무관</label>
            </div>
            <div>
              <CheckBox disabled />
              <label>여성</label>
            </div>
            <div>
              <CheckBox disabled />
              <label>남성</label>
            </div>
          </CheckBoxRow>
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

      <Wrapper>
        <Title>케어 필요 항목</Title>
        <FixedWrapper>
          <Key>근무종류</Key>
          <Val>방문요양</Val>
        </FixedWrapper>

        <ListWrapper>
          <ItemWrapper>
            <P>식사 보조</P>
            {getOptions('meal').map((val, idx) => (
              <CheckboxWrapper key={idx}>
                <CheckBox disabled />
                <label>{val}</label>
              </CheckboxWrapper>
            ))}
          </ItemWrapper>
        </ListWrapper>
        <ListWrapper>
          <ItemWrapper>
            <P>배변 보조</P>
            {getOptions('toileting').map((val, idx) => (
              <CheckboxWrapper key={idx}>
                <CheckBox disabled />
                <label>{val}</label>
              </CheckboxWrapper>
            ))}
          </ItemWrapper>
        </ListWrapper>
        <ListWrapper>
          <ItemWrapper>
            <P>이동 보조</P>
            {getOptions('mobility').map((val, idx) => (
              <CheckboxWrapper key={idx}>
                <CheckBox disabled />
                <label>{val}</label>
              </CheckboxWrapper>
            ))}
          </ItemWrapper>
        </ListWrapper>
        <ListWrapper>
          <ItemWrapper>
            <P>일상생활</P>
            {getOptions('daily').map((val, idx) => (
              <CheckboxWrapper key={idx}>
                <CheckBox disabled />
                <label>{val}</label>
              </CheckboxWrapper>
            ))}
          </ItemWrapper>
        </ListWrapper>
      </Wrapper>

      <Wrapper>
        <Title>근무 상세 정보</Title>
        <FixedWrapper>
          <Key>근무일정</Key>
          <Val>
            <p>목 12:00 ~ 14:00</p>
            <p>금 12:00 ~ 14:00</p>
          </Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>근무조건</Key>
          <Val>시급 13,000원</Val>
        </FixedWrapper>
        <ItemWrapper>
          <Key>복리후생</Key>
          {getOptions('benefits').map((val, idx) => (
            <CheckboxWrapper key={idx}>
              <CheckBox disabled />
              <label>{val}</label>
            </CheckboxWrapper>
          ))}
        </ItemWrapper>
      </Wrapper>

      <Wrapper>
        <Title>공고 상세 정보</Title>
        <FixedWrapper>
          <Key>채용 공고 제목</Key>
          <Val>
            <p>마포구 합정동 요양보호사 구인합니다.</p>
          </Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>담당센터</Key>
          <Val>서울노인 복지센터</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>담당자 성함</Key>
          <Val>김얼리</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>담당자 연락처</Key>
          <Val>
            <p>earlyus@naver.com</p>
            <p>010 - 1234 - 5678</p>
          </Val>
        </FixedWrapper>
      </Wrapper>
    </Container>
  );
};

export default RecruitingSpecifics;

const CheckBoxRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  user-select: none;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const P = styled.p`
  color: var(--grey);
`;
