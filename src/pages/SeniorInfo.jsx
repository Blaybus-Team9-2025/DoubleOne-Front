import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import RoundButton from '../components/_common/RoundButton';

import ImgUpload from '../components/registration/ImgUpload';
import NameAndGender from '../components/registration/NameAndGender';
import BirthDate from '../components/registration/BirthDate';
import AddressInput from '../components/registration/AddressInput';

import CaringGrade from '../components/seniorinfo/CaringGrade';
import Height from '../components/seniorinfo/Height';
import Weight from '../components/seniorinfo/Weight';
import Dementia from '../components/seniorinfo/Dementia';
import EtcDisease from '../components/seniorinfo/EtcDisease';
import GenderPreference from '../components/seniorinfo/GenderPreference';
import Cohabitation from '../components/seniorinfo/Cohabitation';

const SeniorInfo = () => {
  const params = useParams();
  const { type } = params;
  const nav = useNavigate();

  return (
    <Container>
      <Header
        title={type === 'register' ? '어르신 정보 등록' : '구인 정보 등록'}
      />
      <Wrapper>
        <Title>
          <p>어르신 정보 등록</p>
        </Title>
        {type === 'recruit' && <GetInfo>정보 불러오기</GetInfo>}
      </Wrapper>
      <ImgUpload />
      <NameAndGender />
      <BirthDate />
      <CaringGrade />
      <Height />
      <Weight />
      <Dementia />
      <EtcDisease />
      <GenderPreference />
      <AddressInput required />
      <Cohabitation />
      <RoundButton
        text="저장하고 다음으로"
        color="green"
        mt="40"
        mb="30"
        onClick={() => nav('/recruiting/1')}
      />
    </Container>
  );
};

export default SeniorInfo;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GetInfo = styled.button`
  font-size: 12px;
  border-radius: 10px;
  background-color: #e6e6e6;
  padding: 2px 5px;
  margin-left: 5px;
  cursor: pointer;
`;
