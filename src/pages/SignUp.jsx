import { useParams } from 'react-router-dom';

import Title from '../components/_common/Title';
import { getTargetKr, getTypeKr } from '../util/get-kr-word';

const SignUp = () => {
  const params = useParams();

  const { type, target } = params;

  return (
    <div>
      <Title>
        <p>{getTypeKr(type)}로</p>
        <p>회원가입 하기({getTargetKr(target)})</p>
      </Title>
    </div>
  );
};

export default SignUp;
