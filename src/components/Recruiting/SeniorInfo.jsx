import React from "react";
import styled from "styled-components";

const SeniorInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 98px 19px 22px;
`;

const SeniorInfoTitle = styled.span`
  color: #000000;
  font-size: 32px;
  font-weight: bold;
  margin-right: 10px;
`;

const LoadInfoButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e6e6e6;
  width: 80px;
  heigh: 20px;
  padding: 4px 0;
  border-radius: 20px;
  margin-top: 10px;
`;

const LoadInfoText = styled.span`
  color: #000000;
  font-size: 12px;
  width: 72px;
  heigh: 17px;
`;

const SeniorInfo = () => {
  return (
    <SeniorInfoContainer>
      <SeniorInfoTitle>어르신 정보</SeniorInfoTitle>
      <LoadInfoButton>
        <LoadInfoText>정보 불러오기</LoadInfoText>
      </LoadInfoButton>
    </SeniorInfoContainer>
  );
};

export default SeniorInfo;
