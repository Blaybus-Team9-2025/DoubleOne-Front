import styled from 'styled-components';

const MyBubble = ({ msg, time }) => {
  return (
    <Div>
      <p>{time}</p>
      <div>{msg}</div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  gap: 5px;
  align-items: end;
  justify-content: end;
  font-size: 14px;
  margin-bottom: 10px;
  div {
    word-break: break-all;
    max-width: 250px;
    padding: 10px;
    border-radius: 20px;
    /* border-top-right-radius: 0; */
    border: 1px solid black;
  }
`;

export default MyBubble;
