import styled from 'styled-components';
import Profile from '../components/mypage/Profile';
import ButtonBox from '../components/mypage/ButtonBox';
import MatchingList from '../components/mypage/MatchingList';
import Header from '../components/_common/Header';

const MyPage = () => {
  return (
    <Div>
      <Header title="내 정보" />
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
  margin-top: 100px;
`;

export default MyPage;
