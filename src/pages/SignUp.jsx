import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  const params = useParams();
  const { type, target } = params;

  const onSubmit = () => {};

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
              <Email />
              <Password required />
            </>
          )}
          <NameAndGender />
          <PhoneNum required />
          <BirthDate />
          {target === 'center' && <CenterName />}
          <AddressInput required />
          {target === 'center' && (
            <>
              <CarYn />
              <Center />
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
