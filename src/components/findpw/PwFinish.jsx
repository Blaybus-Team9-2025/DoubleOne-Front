import { useNavigate } from 'react-router-dom';
import RoundButton from '../_common/RoundButton';
import styled from 'styled-components';

const PwFinish = () => {
  const nav = useNavigate();
  const today = new Date();
  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const todayString = formatter.format(today).replace(/\s/g, '');

  return (
    <Div>
      <p>
        회원님의 비밀번호가
        <br />
        변경되었습니다.
      </p>
      <p>변경일 : {todayString}</p>
      <RoundButton
        color={'green'}
        text={'로그인하기'}
        onClick={() => nav('/login')}
      />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
  font-size: 16px;
  p:first-child {
    font-size: 24px;
    font-weight: 700;
  }
`;

export default PwFinish;
