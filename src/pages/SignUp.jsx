import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getTargetKr, getTypeKr } from '../util/get-kr-word';
import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import Default from '../components/signup/Default';
import AddressInput from '../components/signup/AdressInput';
import CenterName from '../components/signup/CenterName';
import Center from '../components/signup/Center';
import Email from '../components/signup/Email';
import Password from '../components/signup/Password';
import RoundButton from '../components/_common/RoundButton';

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
        {type === 'email' && (
          <>
            <Email />
            <Password />
          </>
        )}
        <Default />
        {target === 'center' && <CenterName />}
        <AddressInput />
        {target === 'center' && <Center />}
      </div>
      <RoundButton
        text="회원가입 완료"
        color="green"
        onClick={onSubmit}
        mt={type === 'kakao' && target === 'individual' ? '60' : '20'}
        mb="20"
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
