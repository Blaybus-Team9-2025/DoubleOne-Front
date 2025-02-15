import Title from '../components/_common/Title';
import Header from '../components/_common/Header';
import Default from '../components/signup/Default';
import AddressInput from '../components/signup/AdressInput';
import License from '../components/careworkerinfo/License';
import CarYn from '../components/careworkerinfo/CarYn';
import CourseYn from '../components/careworkerinfo/CourseYn';
import RoundButton from '../components/_common/RoundButton';
import ImgUpload from '../components/careworkerinfo/ImgUpload';

import Pay from '../components/careworkerinfo/Pay';
import Location from '../components/careworkerinfo/Location';
import Schedule from '../components/careworkerinfo/Schedule';

import Experience from '../components/careworkerinfo/Experience';
import Introduction from '../components/careworkerinfo/Introduction';

import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const CareWorkerInfo = () => {
  const nav = useNavigate();
  const params = useParams();
  const { order } = params;

  const onSubmit = () => {};

  return (
    <Container>
      <Header title="요양보호사 정보 등록" />
      {order === '1' && (
        <>
          <Title mb="20">
            <p>개인정보 입력</p>
          </Title>
          <ImgUpload />
          <Default />
          <AddressInput />
          <License />
          <CarYn />
          <CourseYn />
          <RoundButton
            text="저장하고 다음으로"
            color="green"
            mb="20"
            onClick={() => nav('/careworkerinfo/2')}
          />
        </>
      )}
      {order === '2' && (
        <>
          <Title mb="20">
            <p>근무 요건 등록</p>
          </Title>
          <Schedule />
          <Pay />
          <Location />
          <RoundButton
            text="이전으로"
            color="white"
            mb="10"
            onClick={() => nav('/careworkerinfo/1')}
          />
          <RoundButton
            text="저장하고 다음으로"
            color="green"
            mb="20"
            onClick={() => nav('/careworkerinfo/3')}
          />
        </>
      )}
      {order === '3' && (
        <>
          <Title mb="20">
            <p>요양보호사 정보등록</p>
          </Title>
          <Experience />
          <Introduction />
          <RoundButton
            text="이전으로"
            color="white"
            mb="10"
            onClick={() => nav('/careworkerinfo/2')}
          />
          <RoundButton
            text="등록하기"
            color="green"
            mb="20"
            onClick={onSubmit}
          />
        </>
      )}
    </Container>
  );
};

export default CareWorkerInfo;

const Container = styled.div`
  margin-top: 100px;
`;
