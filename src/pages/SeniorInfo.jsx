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
  const [imgFile, setImgFile] = useState(null);

  const [error, setError] = useState(
    Object.keys(atom).reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );

  const validate = () => {
    const newErrors = {};

    Object.entries(atom).forEach(([key, val]) => {
      if (key !== 'height' && key !== 'etcDisease' && !val) {
        newErrors[key] = true; // 값이 비어있으면 오류로 설정
      }
      if (key === 'dementiaSymptoms' && val.length <= 0) {
        newErrors[key] = true;
      }
    });
    setError(newErrors); // 한 번에 setError 실행

    return Object.keys(newErrors).length === 0; // 오류가 없으면 true 반환
  };

  useEffect(() => {
    setAtom((prev) => ({ ...prev, managerId: managerId }));
  }, [managerId]);

  useEffect(() => {
    setAtom((prev) => ({ ...prev, dementiaSymptoms: dementiaSymptoms }));
  }, [dementiaSymptoms]);

  const handleRegister = async () => {
    console.log(atom);
    if (!validate()) {
      alert('입력값을 확인해주세요.');
      return;
    }

    const res = await postSenior(atom, imgFile);
    if (res.status === 201) {
      // 성공 시 마이페이지로 이동
      nav('/mypage/manager');
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
      <ImgUpload edit={false} setPostImg={setImgFile} />
      <NameAndGender type={'info'} target={'senior'} error={error.name} />
      <BirthDate type={'info'} target={'senior'} error={error.birthDate} />
      <CaringGrade
        setCaringGrade={(input) =>
          setAtom((prev) => ({ ...prev, careLevel: input }))
        }
        error={error.careLevel}
      />
      <Height
        setHeight={(input) => setAtom((prev) => ({ ...prev, height: input }))}
      />
      <Weight
        setWeight={(input) => setAtom((prev) => ({ ...prev, weight: input }))}
        error={error.weight}
      />
      <Dementia
        setDementia={setDementiaSymptoms}
        error={error.dementiaSymptoms}
      />
      <EtcDisease
        setEtcDisease={(input) =>
          setAtom((prev) => ({ ...prev, etcDisease: input }))
        }
      />
      {type === 'recruit' && <GenderPreference />}
      <AddressInput
        required
        type={'info'}
        target={'senior'}
        error={error.address}
      />
      <Cohabitation
        setCohabitation={(input) =>
          setAtom((prev) => ({ ...prev, cohabitationStatus: input }))
        }
        error={error.cohabitationStatus}
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
