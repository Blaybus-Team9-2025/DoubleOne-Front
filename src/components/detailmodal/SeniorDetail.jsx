import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';
import { useAtomValue } from 'jotai';
import { IdAtom } from '../../jotai/Id';
import { useEffect, useState } from 'react';
import { getSeniorDetail } from '../../api/senior';

import Dementia from '../seniorinfo/Dementia';
import Cohabitation from '../seniorinfo/Cohabitation';
import { translateDate } from '../../util/calculateDate';
import { getKeyByValue } from '../../util/getKeyByValue';

const SeniorDetail = ({ edit }) => {
  const { id } = useAtomValue(IdAtom);

  const [data, setData] = useState({
    seniorId: -1,
    name: '',
    age: -1,
    gender: '',
    address: '',
    birthDate: '',
    careLevel: '',
    cohabitationStatus: '',
    dementiaSymptoms: [],
    etcDisease: '',
    height: -1,
    weight: -1,
    matchingStatus: '',
    profileImg: '',
  });

  useEffect(() => {
    const getData = async () => {
      const res = await getSeniorDetail(id);
      setData(res?.data);
      console.log(res.data);
    };

    getData();
  }, [id]);

  const coHabitationOptions = getOptions('cohabitation');
  const caringGradeOptions = getOptions('caringGrade');

  return (
    <Container>
      <Wrapper>
        <div className="header">
          <Title>개인 정보</Title>
          {edit && <Edit>수정하기</Edit>}
        </div>
        <ImgWrapper>
          <img src={data.profileImg || null} />
        </ImgWrapper>
        <Div>
          <FixedWrapper>
            <Key className="name">이름</Key>
            <Val>{data.name}</Val>
          </FixedWrapper>
          <FixedWrapper>
            <Key>성별</Key>
            <Val>{data.gender === 'M' ? '남' : '여'}</Val>
          </FixedWrapper>
        </Div>
        <FixedWrapper>
          <Key>생년월일</Key>
          <Val>{translateDate(data.birthDate)}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>장기요양등급</Key>
          <Val>{getKeyByValue(caringGradeOptions, data.careLevel)}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>어르신 몸무게</Key>
          <Val>51kg</Val>
        </FixedWrapper>
        <ItemWrapper>
          <Key>치매 증상</Key>
          {edit ? (
            <Dementia />
          ) : (
            <div>
              {data.dementiaSymptoms.map((val, idx) => {
                return <Val key={idx}>{val}</Val>;
              })}
            </div>
          )}
        </ItemWrapper>
        <FixedWrapper>
          <Key>기타 보유 질병/질환</Key>
          <Val>{data.etcDisease || '없음'}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>주소</Key>
          <Val>{data.address}</Val>
        </FixedWrapper>
        <ItemWrapper>
          <Key>동거인 여부</Key>
          {edit ? (
            <Cohabitation />
          ) : (
            <Val>
              {getKeyByValue(coHabitationOptions, data.cohabitationStatus)}
            </Val>
          )}
        </ItemWrapper>
      </Wrapper>
    </Container>
  );
};

export default SeniorDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
  img {
    width: 100%;
    object-fit: cover;
  }
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

const Edit = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;
