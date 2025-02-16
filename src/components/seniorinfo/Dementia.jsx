import styled from 'styled-components';

import Required from '../_common/Required';
import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const options = [
  '정상(치매증상 없음)',
  '했던 말을 반복하는 등 단기 기억 장애',
  '길을 잃거나 자주 가던 곳을 헤맴',
  '어린아이 같은 행동',
  '집 밖을 배회',
  '가족을 알아보지 못함',
  '사람을 의심하는 망상',
  '때리거나 욕설 등 공격적인 행동',
];

const Dementia = () => {
  return (
    <Container>
      <div>
        <Label>치매증상(복수선택 가능)</Label>
        <Required />
      </div>
      <Wrapper>
        {options.map((val, idx) => (
          <CheckboxWrapper key={idx}>
            <Checkbox type="checkbox" id={idx} />
            <Text htmlFor={idx}>{val}</Text>
          </CheckboxWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Dementia;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
