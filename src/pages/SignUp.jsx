import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import {
  emailManagerSignup,
  emailWorkerSignup,
  kakaoManagerSignup,
  kakaoWorkerSignup,
} from '../api/signup';

import {
  EmailWorkerSignupAtom,
  EmailManagerSignupAtom,
  KakaoManagerSignupAtom,
  KakaoWorkerSignupAtom,
} from '../jotai/Signup';
import { getTargetKr, getTypeKr } from '../util/get-kr-word';
import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import RoundButton from '../components/_common/RoundButton';
import NameAndGender from '../components/registration/NameAndGender';
import PhoneNum from '../components/registration/PhoneNum';
import BirthDate from '../components/registration/BirthDate';

import AddressInput from '../components/registration/AddressInput';
import CenterName from '../components/signup/CenterName';
import Center from '../components/signup/Center';

import Email from '../components/signup/Email';
import Password from '../components/signup/Password';
import CarYn from '../components/careworkerinfo/CarYn';

const SignUp = () => {
  const nav = useNavigate();
  const params = useParams();
  const { type, target } = params;

  // target, type에 따라 사용할 atom 선택
  const atom = (() => {
    if (type === 'email' && target === 'worker') {
      return EmailWorkerSignupAtom;
    } else if (type === 'email' && target === 'manager') {
      return EmailManagerSignupAtom;
    } else if (type === 'kakao' && target === 'worker') {
      return KakaoWorkerSignupAtom;
    } else if (type === 'kakao' && target === 'manager') {
      return KakaoManagerSignupAtom;
    }
  })();

  const input = useAtomValue(atom);
  console.log('input', input);

  // Atom의 키 값들을 전부 false로 초기화
  const [error, setError] = useState(
    Object.keys(input).reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );

  const validate = () => {
    const newErrors = {};

    Object.entries(input).forEach(([key, val]) => {
      if (key !== 'centerGrade' && key !== 'centerPeriod' && !val) {
        newErrors[key] = true; // 값이 비어있으면 오류로 설정
      }
    });
    setError(newErrors); // 한 번에 setError 실행

    return Object.keys(newErrors).length === 0; // 오류가 없으면 true 반환
  };

  const onSubmit = async () => {
    if (!validate()) {
      alert('입력값을 확인해주세요.');
      return;
    }

    try {
      let response;
      const requestData = { ...input };

      if (type === 'email' && target === 'worker') {
        response = await emailWorkerSignup(requestData);
      } else if (type === 'email' && target === 'manager') {
        response = await emailManagerSignup(requestData);
      } else if (type === 'kakao' && target === 'worker') {
        response = await kakaoWorkerSignup(requestData);
      } else if (type === 'kakao' && target === 'manager') {
        response = await kakaoManagerSignup(requestData);
      } else {
        alert('잘못된 요청입니다.');
        return;
      }

      if (response?.success) {
        alert('회원가입이 완료되었습니다.');
      }
    } catch (error) {
      console.error('회원가입 에러:', error);
    }
  };

  return (
    <Container>
      <div>
        <Header />
        <Title mb={type === 'kakao' && target === 'individual' ? '70' : '20'}>
          <p>{getTypeKr(type)}로</p>
          <p>회원가입 하기({getTargetKr(target)})</p>
        </Title>
        <Div>
          {type === 'email' && (
            <>
              <Email target={target} error={error.email} />
              <Password required target={target} error={error.password} />
            </>
          )}
          <NameAndGender type={type} target={target} error={error.name} />
          <PhoneNum
            required
            type={type}
            target={target}
            error={error.phoneNum}
          />
          <BirthDate type={type} target={target} error={error.birthDate} />
          {target === 'manager' && (
            <CenterName type={type} error={error.centerName} />
          )}
          <AddressInput
            required
            type={type}
            target={target}
            error={error.address}
          />
          {target === 'manager' && (
            <>
              <CarYn type={type} />
              <Center type={type} />
            </>
          )}
        </Div>
      </div>
      <RoundButton
        text="회원가입 완료"
        color="green"
        onClick={onSubmit}
        mt={type === 'kakao' && target === 'individual' ? '60' : '40'}
        mb="30"
      />
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
