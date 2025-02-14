import styled from 'styled-components';
import Date from './Date';
import MyBubble from './MyBubble';
import YourBubble from './YourBubble';

const ChatRoom = () => {
  return (
    <Div>
      <Date date={'2025.02.14'} />
      <YourBubble
        isFirstMsg={true}
        msg={'fkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'}
        name={'박요양(00기관)'}
        time={'13:59'}
      />
      <YourBubble
        isFirstMsg={false}
        msg={'랄랄라'}
        name={'박요양(00기관)'}
        time={'14:00'}
      />
      <MyBubble msg={'예'} time={'14:00'} />
      <MyBubble
        msg={
          'Lorem ipsum dolor sit amet consectetur. Sed tortor dictum lorem laoreet. A tempus nunc nisi nec adipiscing lorem blandit. Et.'
        }
        time="14:02"
      />
      <YourBubble
        isFirstMsg={true}
        msg={'fkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'}
        name={'박요양(00기관)'}
        time={'13:59'}
      />
      <YourBubble
        isFirstMsg={false}
        msg={'랄랄라'}
        name={'박요양(00기관)'}
        time={'14:00'}
      />
      <MyBubble msg={'예'} time={'14:00'} />
      <MyBubble
        msg={
          'Lorem ipsum dolor sit amet consectetur. Sed tortor dictum lorem laoreet. A tempus nunc nisi nec adipiscing lorem blandit. Et.'
        }
        time="14:02"
      />
    </Div>
  );
};

const Div = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;

export default ChatRoom;
