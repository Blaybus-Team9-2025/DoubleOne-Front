import React, { useState } from 'react';
import styled from 'styled-components';

// 성별 텍스트 스타일
const TitleText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  position: relative; 
  top: -86px;
  left: 420px;
  width: 48px;
  height: 24px;
`;

const RedAsterisk = styled.span`
  color: red;
`;

const GenderSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #000000;
  position: relative; 
  top: -86px;
  left: 420px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.selected ? '#3093F0' : 'transparent')};
  color: ${(props) => (props.selected ? 'white' : '#191919')};
  text-align: center;
  width: 47px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #000000;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
`;

const GenderText = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const GenderSelect = () => {
  const [selectedGender, setSelectedGender] = useState('남');

  const toggleGender = () => {
    setSelectedGender((prevGender) => (prevGender === '남' ? '여' : '남'));
  };

  return (
    <div>
      {/* 성별 텍스트 추가 */}
      <TitleText>성별<RedAsterisk>*</RedAsterisk></TitleText>

      <GenderSelectContainer>
        <Button onClick={toggleGender} selected={selectedGender === '남'}>
          <GenderText>남</GenderText>
        </Button>
        <Button onClick={toggleGender} selected={selectedGender === '여'}>
          <GenderText>여</GenderText>
        </Button>
      </GenderSelectContainer>
    </div>
  );
};

export default GenderSelect;
