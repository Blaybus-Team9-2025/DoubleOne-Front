import React from 'react';
import styled from 'styled-components';

const BirthdaySelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -70px;
  margin-bottom: 8px;
  margin-left: 20px;
  
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #4c4c4c;
  display: flex;
  align-items: center;
`;

const RequiredMark = styled.span`
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
`;

const Select = styled.select`
  margin-bottom: 12px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #8f8f8f;
  border-radius: 5px;
  flex: 1;
`;

const BirthdaySelect = ({ birthYear, birthMonth, birthDay, setFormData }) => {
  return (
    <BirthdaySelectContainer>
      <Label>
        생년월일 <RequiredMark>*</RequiredMark>
      </Label>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Select
          value={birthYear}
          onChange={(e) => setFormData(prev => ({ ...prev, birthYear: e.target.value }))}
        >
          {Array.from({ length: 100 }, (_, i) => 2000 - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </Select>
        <Select
          value={birthMonth}
          onChange={(e) => setFormData(prev => ({ ...prev, birthMonth: e.target.value }))}
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </Select>
        <Select
          value={birthDay}
          onChange={(e) => setFormData(prev => ({ ...prev, birthDay: e.target.value }))}
        >
          {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </Select>
      </div>
    </BirthdaySelectContainer>
  );
};

export default BirthdaySelect;
