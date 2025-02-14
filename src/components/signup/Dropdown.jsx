import React, { useState } from 'react';
import styled from 'styled-components';

export const Dropdown = ({ options = [], width }) => {
  const [currentValue, setCurrentValue] = useState(options[0]);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)} width={width}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        {options.map((data, index) => (
          <Option
            key={index}
            value={data}
            onClick={(e) => setCurrentValue(e.target.getAttribute('value'))}
          >
            {data}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

export default Dropdown;

const SelectBox = styled.div`
  position: relative;
  height: 40px;
  width: ${(props) => props.width};
  padding: 15px;
  border-radius: 5px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid #909090;
  cursor: pointer;

  &::before {
    content: '⌵';
    position: absolute;
    top: 4px;
    right: 15px;
    color: #666666;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Label = styled.p`
  font-size: 14px;
  display: inline-block;

  position: relative;
  bottom: 8px;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  overflow-y: auto;
  border-radius: 10px;
  max-height: ${(props) => (props.show ? '500px' : '0')};
  background-color: white;
  box-shadow: var(--shadow);
  z-index: 10;

  // 스크롤바 CSS
  ::-webkit-scrollbar {
    width: 4px;
    height: 200px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-track {
    background-color: gray;
    border-radius: 30px;
  }
`;

const Option = styled.li`
  font-size: 14px;
  padding: 12px 18px;
  height: 40px;
  transition: background-color 0.2s ease-in;
  border-bottom: 1px solid #909090;

  &:hover {
    color: white;
    border-radius: 5px;
    background: linear-gradient(135deg, #5658df 0%, #2f6dd0 100%);
  }
`;
