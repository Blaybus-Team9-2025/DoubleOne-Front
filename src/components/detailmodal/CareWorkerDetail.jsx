import styled from 'styled-components';

import checkCircle from '../../assets/checkCircle.svg';
import { CheckboxStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const CareWorkerDetail = () => {
  return (
    <Container>
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
          <Key>연락처</Key>
          <Val>010-1234-5678</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>주소</Key>
          <Val>서울 특별시 마포구 합정동</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>자격증</Key>
          <Val>
            <p>요양보호사 1급</p>
            <p>2014-0000</p>
          </Val>
        </FixedWrapper>
        <FixedWrapper className="row">
          <Key>차량소유 여부</Key>
          <Val>예</Val>
        </FixedWrapper>
        <FixedWrapper className="row">
          <Key>치매교육 이수 여부</Key>
          <Val>아니오</Val>
        </FixedWrapper>
      </Wrapper>

      <Wrapper>
        <Title>근무 요건</Title>
        <FixedWrapper>
          <div className="nego">
            <Key>근무일정</Key>
            <div>
              <img src={checkCircle} />
              <span>협의 가능</span>
            </div>
          </div>
          <Val>
            <p>목 12:00 ~ 14:00</p>
            <p>금 12:00 ~ 14:00</p>
          </Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>희망 시급</Key>
          <Val>시급 13,000원</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>희망 근무지역</Key>
          <Val>
            <p>서울 특별시 마포구 합정동</p>
            <p>서울 특별시 서대문구 대현동</p>
          </Val>
        </FixedWrapper>

        <FixedWrapper className="list">
          <Key>케어 가능 항목</Key>
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
        </FixedWrapper>
      </Wrapper>

      <Wrapper>
        <Title>주요 경력</Title>
        <FixedWrapper>
          <Val>식사지원</Val>
          <Val>2024.02.01 ~ 2025.02.01</Val>
        </FixedWrapper>
        <FixedWrapper>
          <P>자기소개</P>
          <p>
            안녕하세요, 저는 요양보호사 1급 자격증을 보유하고 있으며, 어르신들의
            편안한 생활을 돕는데 최선을 다하고 있습니다. 신체 활동 지원부터
            정서적 교감까지 세심한 돌봄을 제공하며, 가족과 같은 따뜻한 마음으로
            어르신을 모십니다.
          </p>
        </FixedWrapper>
      </Wrapper>
    </Container>
  );
};

export default CareWorkerDetail;

const Container = styled.div`
  gap: 100px;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

  &.row,
  .nego {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &.list {
    gap: 20px;
  }
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

const P = styled.p`
  color: var(--grey);
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  ${CheckboxStyle}
`;
