import styled from 'styled-components';
import { useAtom } from 'jotai';

import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';

const Introduction = () => {
  const [input, setInput] = useAtom(CareworkerConditionsAtom);

  return (
    <Container>
      <Label>자기소개</Label>
      <Wrapper>
        <InputText
          maxLength={1000}
          value={input?.introduce}
          onChange={(e) =>
            setInput((prev) => ({
              ...prev,
              introduce: e.target.value,
            }))
          }
        />
        <Exp>({input?.introduce.length}/1000)</Exp>
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
  padding: 10px 15px;
  width: 100%;
  height: 100%;
  border: 1px solid var(--grey);
  border-radius: 5px;
`;
