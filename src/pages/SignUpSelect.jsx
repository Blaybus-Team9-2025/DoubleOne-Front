import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Title from '../components/_common/Title';
import { getTypeKr } from '../util/get-kr-word';

// 개인 회원인지 기업 회원인지 고르는 페이지
const SignUpSelect = () => {
  const params = useParams();
  const { type } = params; // 이메일 or 카카오
  const nav = useNavigate(); // 회원가입 기업 or 개인 페이지로 이동

  return (
    <div>
      <Title mb="100">
        <p>{getTypeKr(type)}로</p>
        <p>회원가입 하기</p>
      </Title>
      <ButtonWrapper>
        <Button
          className="individual"
          onClick={() => nav(`/signup/${type}/individual`)}
        >
          개인 회원
        </Button>
        <Button className="group" onClick={() => nav(`/signup/${type}/group`)}>
          기업 회원
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default SignUpSelect;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 40px 38px;
  width: 100%;
  border-radius: 15px;
  box-shadow: var(--shadow);

  &.individual {
    background-color: var(--green);
  }

  &.group {
    background-color: var(--blue);
  }
`;
