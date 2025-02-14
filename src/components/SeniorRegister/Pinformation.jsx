import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.span`
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 21px;
  margin-left: 20px;
  margin-top: -25px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding-left: 250px;
  padding-right: 250px;
  margin-bottom: 12px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #8f8f8f;
`;

const ImageTop = styled.img`
  width: 100%;
  height: 24px;
  margin-top: 93px;
  object-fit: cover;
  margin-right: 20px;
`;

const SubTitle = styled.span`
  color: #4c4c4c;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 28px;
  margin-left: 20px;
  text-decoration: underline;
  display: flex;
  justify-content: flex-end;  /* 텍스트를 오른쪽 끝에 정렬 */
  width: 92%;  /* 부모 요소의 가로폭을 모두 사용 */
`;

const Pinformation = () => {
  return (
    <Wrapper>
      <Title>개인정보입력</Title>
      <Section>
        <ImageTop
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d9278cc-325b-41ab-bee4-ae30657c08ef"
        />
      </Section>
      <SubTitle>사진 등록하기</SubTitle>
    </Wrapper>
  );
};

export default Pinformation;
