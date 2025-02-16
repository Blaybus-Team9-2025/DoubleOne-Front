import { useState } from 'react';
import styled from 'styled-components';

export const Dropdown = ({
  options = [],
  green,
  width,
  target,
  setData,
  data,
  init,
  exp,
}) => {
  const [currentValue, setCurrentValue] = useState(exp || init || options[0]);
  const [showOptions, setShowOptions] = useState(false);

  const onClick = (e) => {
    const selectedValue = e.target.textContent;

    if (selectedValue !== currentValue) {
      setCurrentValue(selectedValue);
      setData((prev) => ({ ...prev, [target]: selectedValue }));
    }
  };

  return (
    <SelectBox
      onClick={() => setShowOptions((prev) => !prev)}
      width={width}
      className={green && 'green'}
    >
      <Label isExp={currentValue === exp} className={green && 'green'}>
        {currentValue}
      </Label>
      <SelectOptions show={showOptions} className={green && 'green'}>
        {options.map((data, index) => (
          <Option key={index} onClick={onClick}>
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
  background-color: white;
  align-self: center;
  border: 1px solid #909090;
  cursor: pointer;

  &.green {
    height: 45px;
    background-color: var(--green);
    box-shadow: var(--shadow);
    color: black;
    border: none;

    &::before {
      color: black;
    }
  }

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
  color: ${({ isExp, className }) =>
    className === 'green' && isExp ? '#000' : isExp ? '#aaa' : '#000'};

  position: relative;
  bottom: 8px;

  &.placeholder {
    color: red;
  }
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
  z-index: 50;

  &.green {
    top: 48px;
  }

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
