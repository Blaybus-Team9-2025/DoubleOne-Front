import styled from 'styled-components';
import BottomSheet from '../components/mypage/bottomsheet/BottomSheet';

const MyPage = () => {
  return (
    <Div>
      <BottomSheet />
    </Div>
  );
};

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export default MyPage;
