import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일 정의
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px; /* 간격을 일정하게 설정 */
  margin-left: 19px;
  margin-right: 19px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 190px;
  position: relative;
`;

const InputBox = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #8f8f8f;
  margin-bottom: -20px; /* InputBox와 다른 요소 간격을 일정하게 설정 */
`;

const LabelText = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  top: -30px;
  left: 0;
`;

const AsteriskText = styled.span`
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: -30px;
  left: 31px;
`;

const ZipcodeButton = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center;      
  background-color: #c1e678;
  text-align: center;
  width: 120px;
  padding: 0;  // Padding을 0으로 설정하여 높이를 정확히 맞춤
  height: 40px; // 높이를 40px로 설정
  border-radius: 5px;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative; 
  top: 10px;  // 상단으로 위치
  left: -100px;  // 좌측으로 위치
  margin-bottom: 16px; /* 버튼 간격을 일정하게 설정 */
`;


const AddressInput = styled.input`
  width: 100%;
  color: #666666;
  font-size: 14px;
  font-weight: bold;
  padding-top: 9px;  // padding을 조정하여 높이를 40px로 맞춤
  padding-bottom: 9px;
  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 16px; /* AddressInput과 다른 요소 간격을 일정하게 설정 */
  margin-left: 19px;
  margin-right: 19px;
  border-radius: 5px;
  border: 1px solid #8f8f8f;
  background: none;
`;

const PostalAddress = ({ value, setFormData }) => {
  const [input4, setInput4] = useState('');

  const onChangeInput4 = (value) => {
    setInput4(value);
  };

  return (
    <Wrapper>
      <AddressContainer>
        <InputContainer>
          <LabelText>주소</LabelText>
          <AsteriskText>*</AsteriskText>
          <InputBox />
        </InputContainer>
        <ZipcodeButton onClick={() => alert("Pressed!")}>
          <span style={{ color: '#191919', fontSize: '14px' }}>우편번호 찾기</span>
        </ZipcodeButton>
      </AddressContainer>
      <div style={{ height: '45px', marginBottom: '8px', marginLeft: '18px', marginRight: '18px', borderRadius: '5px', border: '1px solid #8F8F8F' }}></div>
      <AddressInput
        placeholder="상세주소를 입력해주세요"
        value={input4}
        onChange={(event) => onChangeInput4(event.target.value)}
      />
    </Wrapper>
  );
};

export default PostalAddress;
