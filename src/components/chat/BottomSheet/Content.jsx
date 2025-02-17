import styled from 'styled-components';

import SeniorChatProfile from '../SeniorChatProfile';
import WorkerChatProfile from '../WorkerChatProfile';
import ChatRoom from '../ChatRoom';
import Input from '../Input';

const Content = ({ seniorProfile, isAccepted }) => {
  return (
    <Div>
      <ChatWrapper>
        {seniorProfile ? (
          <SeniorChatProfile isAccepted={isAccepted} />
        ) : (
          <WorkerChatProfile />
        )}
        <ChatRoom />
        <Input />
      </ChatWrapper>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 200px;
`;

const ChatWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default Content;
