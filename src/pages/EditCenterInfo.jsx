import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import PhoneNum from '../components/registration/PhoneNum';
import ImgUpload from '../components/registration/ImgUpload';
import AddressInput from '../components/registration/AddressInput';
import CarYn from '../components/careworkerinfo/CarYn';
import RoundButton from '../components/_common/RoundButton';
import { LabelStyle } from '../util/common-style';
import { InputStyle } from '../util/common-style';

const EditCenterInfo = () => {
  const [text, setText] = useState('');
  const nav = useNavigate();

  const onSave = () => {};

  return (
    <Container>
      <Header title="온림 溫林" />
      <Title>
        <p>000센터</p>
      </Title>
      <Wrapper>
        <ImgUpload edit />
        <FixedWrapper>
          <Key>센터 이름</Key>
          <Val>000 센터</Val>
        </FixedWrapper>
        <PhoneNum type={'email'} target={'manager'} />
        <AddressInput type={'email'} target={'manager'} />
        <CarYn type={'email'} />
        <InputWrapper>
          <Label htmlFor="grade">센터 등급</Label>
          <Input id="grade" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="hours">영업 기간</Label>
          <Input id="hours" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="etc">기타 센터 정보</Label>
          <Input id="etc" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="intro" type="textarea">
            센터 한마디
          </Label>
          <TextWrapper>
            <TextArea
              maxLength={500}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Exp>({text.length}/500)</Exp>
          </TextWrapper>
        </InputWrapper>
      </Wrapper>
      <ButtonWrapper>
        <RoundButton text="취소" onClick={() => nav(-1)} />
        <RoundButton text="저장하기" color="green" mb="30" onClick={onSave} />
      </ButtonWrapper>
    </Container>
  );
};

export default EditCenterInfo;

const Container = styled.div`
  margin-top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Input = styled.input`
  ${InputStyle}
`;

const FixedWrapper = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

const Key = styled.p`
  font-size: 16px;
  margin-right: 30px;
`;

const Val = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 20vh;
  position: relative;
`;

const TextArea = styled.textarea`
  padding: 10px 15px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--grey);
  border-radius: 5px;
`;

const Exp = styled.p`
  position: absolute;
  right: 20px;
  bottom: 12px;
  font-size: 14px;
  color: var(--grey);
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
`;
