import styled from 'styled-components';

import info from '../../assets/info.png';
import { useState } from 'react';

const ToolTip = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 5000);
  };

  return (
    <Div onClick={handleClick}>
      <img src={info} />
      {isClicked && (
        <TipBox>
          <p>{text}</p>
        </TipBox>
      )}
    </Div>
  );
};

const Div = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const TipBox = styled.div`
  width: max-content;
  position: absolute;
  bottom: 20px;
  z-index: 2000;
  transform: translateX(-25%);
  border-radius: 10px;
  background-color: rgba(158, 158, 158, 0.2);
  padding: 2px;
  p {
    color: #4d4d4d;
    font-size: 12px;
    white-space: pre-line;
  }
`;

export default ToolTip;
