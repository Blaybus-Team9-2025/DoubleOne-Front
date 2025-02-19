import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';

import Title from '../components/_common/Title';
import Header from '../components/_common/Header';
import RoundButton from '../components/_common/RoundButton';
import Required from '../components/_common/Required';

import ImgUpload from '../components/registration/ImgUpload';
import NameAndGender from '../components/registration/NameAndGender';
import PhoneNum from '../components/registration/PhoneNum';
import AddressInput from '../components/registration/AddressInput';
import Wage from '../components/registration/Wage';
import Schedule from '../components/registration/Schedule';

import License from '../components/careworkerinfo/License';
import CarYn from '../components/careworkerinfo/CarYn';
import CourseYn from '../components/careworkerinfo/CourseYn';
import Location from '../components/careworkerinfo/Location';
import Experience from '../components/careworkerinfo/Experience';
import Introduction from '../components/careworkerinfo/Introduction';
import MealAssistance from '../components/recruiting/MealAssistance';
import ToiletingAssistance from '../components/recruiting/ToiletingAssistance';
import MobilityAssistance from '../components/recruiting/MobilityAssistance';
import DailyAssistance from '../components/recruiting/DailyAssistance';

import { postWorkerConditions } from '../api/worker';
import { CareworkerConditionsAtom } from '../jotai/CareworkerInfo';
import { LoginAtom } from '../jotai/Login';

const CareWorkerInfo = () => {
  const nav = useNavigate();
  const params = useParams();
  const { order } = params;

  const input = useAtomValue(CareworkerConditionsAtom);
  const id = useAtomValue(LoginAtom);

  // 요양사 희망 근무 조건 등록
  const onSubmit = async () => {
    const workerId = String(id.memberId);
    console.log(workerId);
    const res = await postWorkerConditions(workerId, input);

    if (res) {
      nav('/mypage/careworker');
    }
  };

  return (
    <Container>
      <Header title="요양보호사 정보 등록" />
      {order === '1' && (
        <>
          <Title mb="20">
            <p>개인정보 입력</p>
          </Title>
          <ImgUpload />
          <NameAndGender type="info" target="worker" />
          <PhoneNum required type="info" target="worker" />
          <AddressInput required type="info" target="worker" />
          <License />
          <div>
            <CarYn type="register" />
            <CourseYn type="register" />
          </div>
          <RoundButton
            text="저장하고 다음으로"
            color="green"
            mb="30"
            mt="20"
            onClick={() => nav('/careworkerinfo/2')}
          />
        </>
      )}
      {order === '2' && (
        <>
          <Title mb="20">
            <p>근무 요건 등록</p>
          </Title>
          <Schedule target={'careworker'} />
          <Wage target={'careworker'} />
          <Location />
          <Div>
            <p>케어 가능 항목(중복 선택 가능)</p>
            <Required />
          </Div>
          <MealAssistance target={'careworker'} />
          <ToiletingAssistance target={'careworker'} />
          <MobilityAssistance target={'careworker'} />
          <DailyAssistance target={'careworker'} />
          <ButtonWrapper>
            <RoundButton
              text="이전으로"
              color="white"
              mt="20"
              onClick={() => nav('/careworkerinfo/1')}
            />
            <RoundButton
              text="저장하고 다음으로"
              color="green"
              mb="30"
              onClick={() => nav('/careworkerinfo/3')}
            />
          </ButtonWrapper>
        </>
      )}
      {order === '3' && (
        <>
          <Title mb="20">
            <p>요양보호사 정보등록</p>
          </Title>
          <Experience />
          <Introduction />
          <ButtonWrapper>
            <RoundButton
              text="이전으로"
              color="white"
              mt="20"
              onClick={() => nav('/careworkerinfo/2')}
            />
            <RoundButton
              text="등록하기"
              color="green"
              mb="30"
              onClick={onSubmit}
            />
          </ButtonWrapper>
        </>
      )}
    </Container>
  );
};

export default CareWorkerInfo;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: -15px;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
