import styled from 'styled-components';
import { useAtom } from 'jotai';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';
import { RecruitingInfoAtom } from '../../jotai/Recruiting';

const ToiletingAssistance = ({ target }) => {
  const options = getOptions('toileting');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);
  const optionValues = options.map((obj) => Object.values(obj)[0]);
  const [input, setInput] = useAtom(atom);

  const atom = () => {
    if (target === 'recruit') {
      return CareworkerConditionsAtom;
    }

    if (target === 'recruit') {
      return RecruitingInfoAtom;
    }
  };

  const handleCheckboxChange = (value) => {
    setInput((prev) => {
      const updatedAssistance = prev.services.TOILETING_ASSISTANCE.includes(
        value
      )
        ? prev.services.TOILETING_ASSISTANCE.filter((item) => item !== value) // 이미 선택된 항목 제거
        : [...prev.services.TOILETING_ASSISTANCE, value]; // 선택되지 않은 항목 추가

      return {
        ...prev,
        services: {
          ...prev.services,
          TOILETING_ASSISTANCE: updatedAssistance,
        },
      };
    });
  };

  return (
    <Container>
      <Label>배변 보조</Label>
      <Wrapper>
        {optionKeys.map((val, idx) => (
          <CheckboxWrapper key={idx}>
            <Checkbox
              type="checkbox"
              id={val}
              checked={input.services.TOILETING_ASSISTANCE.includes(
                optionValues[idx]
              )}
              onChange={() => handleCheckboxChange(optionValues[idx])}
            />
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
