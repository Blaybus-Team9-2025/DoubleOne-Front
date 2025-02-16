import React from 'react';
import styled from 'styled-components';

// 성별 텍스트 스타일
const TitleText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;  // '남'과 '여' 버튼 사이에 여백 추가
  position: relative; 
  top: -100px;  // 상단으로 위치
  left: 350px;
`;

const RedAsterisk = styled.span`
  color: red;
`;

const GenderSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  padding-right: 19px;
  border-radius: 5px;
  border: 1px solid #000000;
  position: relative; 
  top: -100px;  // 상단으로 위치
  left: 350px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CCCCCC;
  text-align: left;
  width: 47px;
  padding-top: 17px;
  padding-bottom: 17px;
  border-radius: 5px;
  border: 1px solid #000000;
`;

const GenderText = styled.span`
  color: #191919;
  font-size: 14px;
  font-weight: bold;
`;

const GenderSelect = () => {
  return (
    <div>
      {/* 성별 텍스트 추가 */}
      <TitleText>성별<RedAsterisk>*</RedAsterisk></TitleText>

      <GenderSelectContainer>
        <Button onClick={() => alert("Pressed!")}>
          <GenderText>남</GenderText>
        </Button>
        <GenderText>여</GenderText>
      </GenderSelectContainer>
    </div>
  );
};

export default GenderSelect;
