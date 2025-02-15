import { Outlet } from 'react-router-dom';
import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import styled from 'styled-components';

const FindPw = () => {
  return (
    <Div>
      <Header title={'비밀번호 찾기'} />
      <Title>비밀번호 재설정</Title>
      <div className="margin" />
      <Outlet />
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;

  .margin {
    margin-bottom: 80px;
  }
`;

export default FindPw;
