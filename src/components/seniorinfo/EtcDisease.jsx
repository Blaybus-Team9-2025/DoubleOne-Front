import styled from 'styled-components';

import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const EtcDisease = ({ setEtcDisease }) => {
  return (
    <Container>
      <Label>기타 보유 질병/질환 및 상세 요구사항</Label>
      <Input type="text" onChange={(e) => setEtcDisease(e.target.value)} />
    </Container>
  );
};

export default EtcDisease;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Input = styled.input`
  ${InputStyle}
`;
