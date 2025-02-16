import SeniorProfile from '../components/chat/SeniorProfile';
import Header from '../components/_common/Header';
import styled from 'styled-components';
import Input from '../components/chat/Input';
import ChatRoom from '../components/chat/ChatRoom';

const Chat = () => {
  return (
    <Div>
      <Header title={'채팅'} />
      <ChatWrapper>
        <SeniorProfile />
        <ChatRoom />
        <Input />
      </ChatWrapper>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  margin-bottom: 180px;
`;

const ChatWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 80px;
`;

export default Chat;
