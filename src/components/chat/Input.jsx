import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import dm from '../../assets/dm.png';

const Input = () => {
  const [msg, setMsg] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '30px';
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  }, []);

  const handleChange = (e) => {
    setMsg(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = '30px'; // 최소 높이 설정
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  };
  return (
    <Div>
      <textarea
        ref={textareaRef}
        value={msg}
        onChange={handleChange}
        placeholder="메시지를 입력하세요"
      />
      <Btn>
        <img src={dm} />
      </Btn>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: end;
  min-width: 300px;
  max-width: 600px;
  transform: translate(-20px, 20px);
  width: calc(100% + 40px);
  border-radius: 10px;
  border: 1px solid #a0a0a0;
  background-color: #ffffff;
  flex-shrink: 0;

  textarea {
    flex: 1;
    width: calc(100% - 60px);
    min-height: 30px;
    max-height: 240px;
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
  border-radius: 10px;
  background-color: var(--green);
  margin-right: 3px;
  margin-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
  }
`;

export default Input;
