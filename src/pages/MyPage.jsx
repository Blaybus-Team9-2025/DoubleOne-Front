import styled from 'styled-components';
import Profile from '../components/mypage/Profile';
import ButtonBox from '../components/mypage/ButtonBox';
import MatchingList from '../components/mypage/MatchingList';

const MyPage = () => {
  return (
    <Div>
      <Profile />
      <ButtonBox />
      <MatchingList />
    </Div>
  );
};

const Div = styled.div`
  /* height: 100vh; */
  /* width: 100vw; */
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default MyPage;
