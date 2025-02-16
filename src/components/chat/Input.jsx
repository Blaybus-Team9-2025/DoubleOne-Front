import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import send from '../../assets/send.png';

const Input = () => {
  const [msg, setMsg] = useState('');

  return (
    <Div>
      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <Btn>
        <img src={send} />
      </Btn>
    </Div>
  );
};

const Div = styled.div`
  position: fixed;
  bottom: 20px;
  display: flex;
  align-items: end;
  min-width: 260px;
  max-width: 560px;
  width: calc(100% - 40px);
  border-radius: 10px;
  border: 1px solid #a0a0a0;
  background-color: #ffffff;
  flex-shrink: 0;

  textarea {
    flex: 1;
    width: calc(100% - 60px);
    height: 160px;
    padding: 15px;
    font-size: 16px;
    word-break: break-all;

    resize: none;
    overflow-y: auto;
    line-height: 25px;
    outline: none;
  }
`;

const Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #d9d9d9;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
  }
`;

export default Input;
