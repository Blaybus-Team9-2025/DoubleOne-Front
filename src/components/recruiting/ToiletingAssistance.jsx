import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const options = [
  '스스로 배변 가능',
  '기저귀 케어 필요',
  '가끔 대소변 실수 시 도움',
  '유치도뇨/방광루/장루 관리',
];

const ToiletingAssistance = () => {
  return (
    <Container>
      <Label>배변보조</Label>
      <Wrapper>
        {options.map((val, idx) => (
          <CheckboxWrapper key={idx}>
            <Checkbox type="checkbox" id={val} />
            <Text htmlFor={val}>{val}</Text>
          </CheckboxWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ToiletingAssistance;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  ${CheckboxStyle}
`;

const Text = styled.label`
  cursor: pointer;
`;
