import React from 'react';
import styled from 'styled-components';

// 스타일 정의
const InputContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 12px 20px;
  align-items: flex-start;
  margin-top: -40px;
  margin-bottom: 8px;
`;

const Label = styled.span`
  color: #4c4c4c;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '45px'};
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0 10px;
`;

const InputField = styled.input`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  flex: 1;
  border: none;
  background: none;
  outline: none;
  height: 100%;
  width: 100%;px;

`;

const Unit = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #4c4c4c;
  margin-left: -25px;
`;

const InputWithLabel = ({ label, name, value, setFormData, placeholder, unit, width, height }) => {
  return (
    <InputContainer>
      <Label>{label} <span style={{ color: 'red' }}>*</span></Label>
      <InputWrapper width={width} height={height}>
        <InputField
          value={value}
          onChange={(e) => setFormData(prev => ({ ...prev, [name]: e.target.value }))}
          placeholder={placeholder}
        />
        {unit && <Unit>{unit}</Unit>}
      </InputWrapper>
    </InputContainer>
  );
};

export default InputWithLabel;
