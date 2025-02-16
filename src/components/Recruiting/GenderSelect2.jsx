import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-top: 15px;
  margin-bottom: 25px;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const Label = styled.span`
  color: #000000;
  font-size: 16px;
  margin-right: 24px;
`;

const Required = styled.span`
  color: #ff0000;
  font-size: 20px;
  font-weight: bold;
  flex: 1;
`;

const OptionRow = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #4c4c4c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  position: relative;

  &:checked::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #4c4c4c;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const OptionText = styled.span`
  color: #4c4c4c;
  font-size: 14px;
  font-weight: bold;
  flex: 1;
`;

const GenderSelect2 = () => {
  const [selectedGender, setSelectedGender] = useState("무관");

  return (
    <Container>
      <LabelRow>
        <Label>선호 요양사 성별</Label>
        <Required>*</Required>
      </LabelRow>
      {["무관", "남성", "여성"].map((gender, index) => (
        <OptionRow key={index}>
          <RadioInput
            type="radio"
            name="gender"
            value={gender}
            checked={selectedGender === gender}
            onChange={() => setSelectedGender(gender)}
          />
          <OptionText>{gender}</OptionText>
        </OptionRow>
      ))}
    </Container>
  );
};

export default GenderSelect2;
