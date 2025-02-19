import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { useAtomValue } from 'jotai';
import { IdAtom } from '../../jotai/Id';
import { useEffect, useState } from 'react';
import { getSeniorDetail } from '../../api/senior';
import { getConditionDetail } from '../../api/condition';
import { translateDate } from '../../util/calculateDate';
import { getKeyByValue } from '../../util/getKeyByValue';
import { getOptions } from '../../util/get-options';
import { getManagerInfo } from '../../api/manager';
import { recruitType, seniorType } from '../../util/dataTypes';
import { ManagerInfoAtom } from '../../jotai/ManagerInfo';

const RecruitingDetail = () => {
  const idData = useAtomValue(IdAtom);
  const [seniorData, setSeniorData] = useState({ seniorType });
  const [recruitData, setRecruitData] = useState(recruitType);
  const managerData = useAtomValue(ManagerInfoAtom);

  const coHabitationOptions = getOptions('cohabitation');
  const caringGradeOptions = getOptions('caringGrade');
  const workTypeOptions = getOptions('workType');
  const mealOptions = getOptions('meal');
  const toiletingOptions = getOptions('toileting');
  const mobilityOptions = getOptions('mobility');
  const dailyOptions = getOptions('daily');
  const payTypeOptions = getOptions('wageType');
  const benefitsOptions = getOptions('benefits');
  const insuranceOptions = getOptions('insurance');
  const weekdayOptions = getOptions('weekday');

  useEffect(() => {
    const getData = async () => {
      const res = await getSeniorDetail(idData.seniorId);
      if (res.data) {
        console.log(res);
        setSeniorData(res.data);
      }
    };

    console.log('idData.seniorId', idData.seniorId);

    if (idData.seniorId > 0) {
      getData();
    }
  }, [idData.seniorId]);

  useEffect(() => {
    const getData = async () => {
      const res = await getConditionDetail(idData.seniorConditionId);
      if (res.data) {
        console.log(res);
        setRecruitData(res.data);
      }
    };

    console.log('idData.seniorConditionId', idData.seniorConditionId);

    if (idData.seniorConditionId > 0) {
      getData();
    }
  }, [idData.seniorConditionId]);

  useEffect(() => {
    console.log(idData);
  }, [idData]);

  return (
    <Container>
      <Wrapper>
        <Title>어르신 정보</Title>
        <ImgWrapper>
          <img src={seniorData.profileImg} />
        </ImgWrapper>
        <Div>
          <FixedWrapper>
            <Key className="name">이름</Key>
            <Val>{seniorData.name}</Val>
          </FixedWrapper>
          <FixedWrapper>
            <Key>성별</Key>
            <Val>{seniorData.gender === 'M' ? '남' : '여'}</Val>
          </FixedWrapper>
        </Div>
        <FixedWrapper>
          <Key>생년월일</Key>
          <Val>{translateDate(seniorData.birthDate || '2000-01-01')}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>장기요양등급</Key>
          <Val>{getKeyByValue(caringGradeOptions, seniorData.careLevel)}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>어르신 몸무게</Key>
          <Val>{seniorData.weight}kg</Val>
        </FixedWrapper>
        <ItemWrapper>
          <Key>치매 증상</Key>
          <div>
            {seniorData.dementiaSymptoms?.map((val, idx) => {
              return <Val key={idx}>{val}</Val>;
            })}
          </div>
        </ItemWrapper>
        <FixedWrapper>
          <Key>기타 보유 질병/질환</Key>
          <Val>{seniorData.etcDisease || '없음'}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>선호 요양사 성별</Key>
          <Val>{recruitData.preferGender === 'M' ? '남' : '여'}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>주소</Key>
          <Val>{seniorData.address}</Val>
        </FixedWrapper>
        <ItemWrapper>
          <Key>동거인 여부</Key>
          <Val>
            {getKeyByValue(coHabitationOptions, seniorData.cohabitationStatus)}
          </Val>
        </ItemWrapper>
      </Wrapper>

      <Wrapper>
        <Title>케어 필요 항목</Title>
        <FixedWrapper>
          <Key>근무종류</Key>
          <Val>{getKeyByValue(workTypeOptions, recruitData.workType)}</Val>
        </FixedWrapper>

        <ListWrapper>
          <ItemWrapper>
            <P>식사 보조</P>
            <div>
              {recruitData.services.MEAL_ASSISTANCE?.map((item, idx) => {
                return <Val key={idx}>{getKeyByValue(mealOptions, item)}</Val>;
              })}
            </div>
          </ItemWrapper>
        </ListWrapper>
        <ListWrapper>
          <ItemWrapper>
            <P>배변 보조</P>
            <div>
              {recruitData.services.TOILETING_ASSISTANCE?.map((item, idx) => {
                return (
                  <Val key={idx}>{getKeyByValue(toiletingOptions, item)}</Val>
                );
              })}
            </div>
          </ItemWrapper>
        </ListWrapper>
        <ListWrapper>
          <ItemWrapper>
            <P>이동 보조</P>
            <div>
              {recruitData.services.MOBILITY_ASSISTANCE?.map((item, idx) => {
                return (
                  <Val key={idx}>{getKeyByValue(mobilityOptions, item)}</Val>
                );
              })}
            </div>
          </ItemWrapper>
        </ListWrapper>
        <ListWrapper>
          <ItemWrapper>
            <P>일상생활</P>
            <div>
              {recruitData.services.DAILY_LIFE_SUPPORT?.map((item, idx) => {
                return <Val key={idx}>{getKeyByValue(dailyOptions, item)}</Val>;
              })}
            </div>
          </ItemWrapper>
        </ListWrapper>
      </Wrapper>

      <Wrapper>
        <Title>근무 상세 정보</Title>
        <FixedWrapper>
          <Key>{recruitData.title}</Key>
          <div>
            {recruitData.seniorSchedules?.map((item, idx) => {
              return (
                <Val key={idx}>
                  {getKeyByValue(weekdayOptions, item.day)} {item.startTime} ~{' '}
                  {item.endTime}
                </Val>
              );
            })}
          </div>
        </FixedWrapper>
        <FixedWrapper>
          <Key>근무조건</Key>
          <Val>
            {getKeyByValue(payTypeOptions, recruitData.payType)}{' '}
            {recruitData.wage}원
          </Val>
        </FixedWrapper>
        <ItemWrapper>
          <Key>복리후생</Key>
          <div>
            {recruitData.welfares.BENEFITS?.map((item, idx) => {
              return (
                <Val key={idx}>{getKeyByValue(benefitsOptions, item)}</Val>
              );
            })}
          </div>
        </ItemWrapper>
        <ItemWrapper>
          <Key>보험</Key>
          <div>
            {recruitData.welfares.INSURANCE?.map((item, idx) => {
              return (
                <Val key={idx}>{getKeyByValue(insuranceOptions, item)}</Val>
              );
            })}
          </div>
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
          <Val>{managerData.centerName}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>담당자 성함</Key>
          <Val>{managerData.name}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>담당자 연락처</Key>
          <div>
            <Val>{managerData.email}</Val>
            <Val>{managerData.phoneNum}</Val>
          </div>
        </FixedWrapper>
      </Wrapper>
    </Container>
  );
};

export default RecruitingDetail;

const Container = styled.div`
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

const CheckBoxRow = styled.div`
  display: flex;
  justify-content: space-between;
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
