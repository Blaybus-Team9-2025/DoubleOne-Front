import React from 'react';
import styled from 'styled-components';

// 스타일 정의
const InputContainer = styled.div`
  display: flex;
  flex-direction: column; /* 요소들이 세로로 나열되도록 설정 */
  margin: 12px 20px;
  width: 100%; /* 부모 요소의 너비를 100%로 설정하여 InputField가 줄을 차지하도록 */
  align-items: flex-start; /* 요소들이 왼쪽으로 정렬되도록 */
`;

const Label = styled.div`
  color: #4c4c4c;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px; /* 라벨과 입력 필드 간의 간격 */
  margin-left: 20px;
`;

const InputField = styled.input`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 14px;  /* 위 아래 padding을 줄여서 높이를 맞춤 */
  height: 40px;         /* 고정 높이 40px 설정 */
  margin-bottom: 21px; /* 입력 필드와 다음 요소 간의 간격 */
  width: 100%;
  border: 1px solid #000;
  background: none;
  border-radius: 5px;
`;

const InputWithLabel = ({ label, value, onChange, placeholder }) => {
  return (
    <InputContainer>
      <Label>{label}</Label> {/* Label은 InputField 바로 위에 위치 */}
      <InputField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default InputWithLabel;
