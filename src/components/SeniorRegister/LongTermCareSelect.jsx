import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  margin-bottom: 12px;
  margin-left: 20px;
  width:40%;

`;

const Label = styled.label`
  color: #4c4c4c;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px; /* 드롭다운과 간격 */
`;

const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 5px;
`;

const LongTermCareSelect = ({ value, setFormData }) => {
  const options = ['등급없음', '1급', '2급', '3급', '4급', '5급', '인지지원등급'];

  return (
    <Container>
      <Label>
        장기요양등급 <span style={{ color: 'red' }}>*</span>
      </Label>
      <Select value={value} onChange={(e) => setFormData(prev => ({ ...prev, careLevel: e.target.value }))}>
        {options.map(level => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default LongTermCareSelect;
