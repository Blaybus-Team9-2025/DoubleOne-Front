import styled from 'styled-components';
import { useState } from 'react';

const Introduction = () => {
  const [text, setText] = useState('');

  return (
    <Container>
      <Label>자기소개</Label>
      <Wrapper>
        <InputText
          maxLength={1000}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Exp>({text.length}/1000)</Exp>
      </Wrapper>
    </Container>
  );
};

export default Introduction;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
`;

const Exp = styled.p`
  position: absolute;
  right: 20px;
  bottom: 12px;
  font-size: 14px;
  color: var(--grey);
`;

const InputText = styled.textarea`
  padding: 12px 20px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--grey);
  border-radius: 5px;
`;
