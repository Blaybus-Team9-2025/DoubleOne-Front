import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import RoundButton from '../components/_common/RoundButton';
import Required from '../components/_common/Required';

import WorkType from '../components/recruiting/WorkType';
import MealAssistance from '../components/recruiting/MealAssistance';
import ToiletingAssistance from '../components/recruiting/ToiletingAssistance';
import MobilityAssistance from '../components/recruiting/MobilityAssistance';
import DailyAssistance from '../components/recruiting/DailyAssistance';

import Schedule from '../components/registration/Schedule';
import Wage from '../components/registration/Wage';
import Benefits from '../components/recruiting/Benefits';
import RecruitingDetail from '../components/recruiting/RecruitingDetail';

const Recruiting = () => {
  const params = useParams();
  const { order } = params;
  const nav = useNavigate();

  return (
    <Container>
      <Header title="구인 정보 등록" />
      {order === '1' && (
        <>
          <Title>
            <p>케어 필요 항목</p>
          </Title>
          <WorkType />
          <Div>
            <p>어르신 필요 서비스(중복 선택 가능)</p>
            <Required />
          </Div>
          <MealAssistance />
          <ToiletingAssistance />
          <MobilityAssistance />
          <DailyAssistance />
          <RoundButton
            color="green"
            text="저장하고 다음으로"
            onClick={() => nav(`/recruiting/2`)}
          />
        </>
      )}
      {order === '2' && (
        <>
          <Title>
            <p>근무 상세 정보</p>
          </Title>
          <Schedule recruiting />
          <Wage recruiting />
          <Benefits />
          <RoundButton
            color="green"
            text="저장하고 다음으로"
            onClick={() => nav(`/recruiting/3`)}
          />
        </>
      )}
      {order === '3' && (
        <>
          <Title>
            <p>공고 상세 정보</p>
          </Title>
          <RecruitingDetail />
          <RoundButton color="green" text="등록하기" />
        </>
      )}
    </Container>
  );
};

export default Recruiting;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: -15px;
  font-size: 16px;
`;
