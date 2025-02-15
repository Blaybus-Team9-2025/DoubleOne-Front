// DiseaseInput.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components 설정
const Label = styled.div`
  color: #4C4C4C;
  font-size: 16px;
  font-weight: bold;
  margin-top: 21px;
  margin-bottom: 10px;
  margin-left: 21px;
`;

const InputContainer = styled.div`
  height: 45px;
  margin-bottom: 41px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #8f8f8f;
`;

const TextInput = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 14px;
  font-weight: bold;
  color: #666666;
  border-radius: 5px;
  border: 1px solid #8F8F8F;
  background: none;
`;

const DiseaseInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Disease Label */}
      <Label>기타 보유 질병/질환 및 상세 요구사항</Label>

      {/* Disease Input */}
      <InputContainer>
        <TextInput
          type="text"
          placeholder=""
          value={inputValue}
          onChange={handleInputChange}
        />
      </InputContainer>
    </div>
  );
};

export default DiseaseInput;
