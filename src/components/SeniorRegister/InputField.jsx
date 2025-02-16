import React from 'react';
import styled from 'styled-components';

// 스타일 정의
const InputContainer = styled.div`
  display: flex;
  flex-direction: column; /* 요소들이 세로로 나열되도록 설정 */
  margin: 12px 20px;
  width: 40%; /* 부모 요소의 너비를 100%로 설정하여 InputField가 줄을 차지하도록 */
  align-items: flex-start;
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
  width: 100%;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0 10px;
`;

const InputField = styled.input`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding: 17px 14px;
  flex: 1;
  border: none;
  background: none;
  outline: none;
`;

const Unit = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #4c4c4c;
  margin-left: 5px;
  margin-left: -25px;
`;

const InputWithLabel = ({ label, name, value, setFormData, placeholder, unit }) => {
  return (
    <InputContainer>
      <Label>{label} <span style={{ color: 'red' }}>*</span></Label>
      <InputWrapper>
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
