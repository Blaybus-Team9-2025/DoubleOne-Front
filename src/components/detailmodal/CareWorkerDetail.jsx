import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';

import checkCircle from '../../assets/checkCircle.svg';
import { CheckboxStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';
import { getWorkerDetail, getWorkerInfo } from '../../api/worker';
import { workerConditionIdAtom } from '../../jotai/CareworkerInfo';
import { getKeyByValue } from '../../util/getKeyByValue';
import { LoginAtom } from '../../jotai/Login';
import { translateDate } from '../../util/calculateDate';

const CareWorkerDetail = () => {
  const { workerId } = useAtomValue(LoginAtom);
  const { workerConditionId } = useAtomValue(workerConditionIdAtom);

  const [info, setInfo] = useState({
    workerId: -1,
    name: '',
    gender: 'M',
    phoneNum: '',
    hasTrained: false,
    hasVehicle: false,
    address: '',
    zipcode: '',
    detailAddress: '',
  });

  useEffect(() => {
    const getInfo = async () => {
      const res = await getWorkerInfo(workerId);
      setInfo(res?.data);
    };

    getInfo();
  }, [workerId]);

  const [data, setData] = useState({
    workerId: 1,
    name: '',
    gender: 'M',
    phoneNum: '',
    hasTrained: true,
    hasVehicle: true,
    address: '',
    introduction: '',
    memberId: -1,
    password: '',
    workerLicenses: [
      {
        licenseType: '',
        licenseNum: '',
      },
    ],
    workerRegions: [
      {
        city: '',
        district: '',
        neighborhood: '',
      },
    ],
    workerSchedules: [
      {
        day: '',
        startTime: '',
        endTime: '',
      },
    ],
  });

  useEffect(() => {
    const getData = async () => {
      const res = await getWorkerDetail(workerConditionId);
      setData(res?.data);
    };

    getData();
  }, [workerConditionId]);

  const licenseOptions = getOptions('license');
  const mealOptions = getOptions('meal');
  const weekdayOptions = getOptions('weekday');
  const wageTypeOptions = getOptions('wageType');
  const toiletiongOptions = getOptions('toileting');
  const mobilityOptions = getOptions('mobility');
  const dailyOptions = getOptions('daily');
  const benefitOptions = getOptions('benefit');

  return (
    <Container>
      <Wrapper>
        <Title>개인 정보</Title>
        <ImgWrapper>
          <img src={null} />
        </ImgWrapper>
        <Div>
          <FixedWrapper>
            <Key className="name">이름</Key>
            <Val>{info.name}</Val>
          </FixedWrapper>
          <FixedWrapper>
            <Key>성별</Key>
            <Val>{info.gender === 'M' ? '남' : '여'}</Val>
          </FixedWrapper>
        </Div>
        <FixedWrapper>
          <Key>생년월일</Key>
          <Val>{info.birthDate}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>연락처</Key>
          <Val>{info.phoneNum}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>주소</Key>
          <Val>{info.address}</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>자격증</Key>
          <div>
            <Val>{getKeyByValue(licenseOptions, info.licenseType)}</Val>
            <Val>{info.licenseNum}</Val>
          </div>
        </FixedWrapper>
        <FixedWrapper className="row">
          <Key>차량소유 여부</Key>
          <Val>{info.hasVehicle ? '예' : '아니오'}</Val>
        </FixedWrapper>
        <FixedWrapper className="row">
          <Key>치매교육 이수 여부</Key>
          <Val>{info.hasTrained ? '예' : '아니오'}</Val>
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
          <div>
            {data.workerSchedules.map((schedule, index) => (
              <Val key={index}>
                {getKeyByValue(weekdayOptions, schedule.day)}
                {schedule.startTime} ~ {schedule.endTime}
              </Val>
            ))}
          </div>
        </FixedWrapper>
        <FixedWrapper>
          <Key>희망 시급</Key>
          <Val>
            {getKeyByValue(wageTypeOptions, data.wageType)} {data.wage}원
          </Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>희망 근무지역</Key>
          {data.workerRegions.map((region, index) => (
            <Val key={index}>
              {region.city}
              {region.district}
              {region.neighborhood}
            </Val>
          ))}
        </FixedWrapper>

        {/* <FixedWrapper className="list">
          <Key>케어 가능 항목</Key>
          <ListWrapper>
            <ItemWrapper>
              <P>식사 보조</P>
              {getKeyByValue(mealOptions, data.)}
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
        </FixedWrapper> */}
      </Wrapper>

      <Wrapper>
        {/* <Title>주요 경력</Title>
        <FixedWrapper>
          <Val>식사지원</Val>
          <Val>2024.02.01 ~ 2025.02.01</Val>
        </FixedWrapper> */}
        <FixedWrapper>
          <P>자기소개</P>
          <p>{data.introduction}</p>
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
