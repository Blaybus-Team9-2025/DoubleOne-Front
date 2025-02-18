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

import { postSenior } from '../api/senior';
import { useAtom, useAtomValue } from 'jotai';
import { SeniorInfoAtom } from '../jotai/SeniorInfo';
import { LoginAtom } from '../jotai/Login';

const SeniorInfo = () => {
  const params = useParams();
  const { type } = params;
  const nav = useNavigate();

  const [atom, setAtom] = useAtom(SeniorInfoAtom);
  const { managerId } = useAtomValue(LoginAtom);

  const [dementiaSymptoms, setDementiaSymptoms] = useState([]);

  useEffect(() => {
    setAtom({ ...atom, managerId: managerId });
  }, [managerId]);

  const handleRegister = async () => {
    const res = await postSenior(atom, dementiaSymptoms);
    console.log(res);
    if (res.status === 200) {
      // 라우팅 추가
    }
  };

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
      <ImgUpload
        edit={false}
        setPostImg={(input) => setAtom({ ...atom, imgFile: input })}
      />
      <NameAndGender type={'info'} target={'senior'} />
      <BirthDate type={'info'} target={'senior'} />
      <CaringGrade
        setCaringGrade={(input) => setAtom({ ...atom, careLevel: input })}
      />
      <Height setHeight={(input) => setAtom({ ...atom, height: input })} />
      <Weight setWeight={(input) => setAtom({ ...atom, weight: input })} />
      <Dementia setDementia={setDementiaSymptoms} />
      <EtcDisease
        setEtcDisease={(input) => setAtom({ ...atom, etcDisease: input })}
      />
      {type === 'recruit' && <GenderPreference />}
      <AddressInput required type={'info'} target={'senior'} />
      <Cohabitation
        setCohabitation={(input) =>
          setAtom({ ...atom, cohabitationStatus: input })
        }
      />
      {type === 'register' ? (
        <RoundButton
          text="저장하기"
          color="green"
          mt="40"
          mb="30"
          onClick={handleRegister}
        />
      ) : (
        <RoundButton
          text="저장하고 다음으로"
          color="green"
          mt="40"
          mb="30"
          onClick={() => nav('/recruiting/1')}
        />
      )}
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
