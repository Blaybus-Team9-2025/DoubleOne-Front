import styled from 'styled-components';
import { useAtom } from 'jotai';

import { CheckboxStyle, LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';
import { RecruitingInfoAtom } from '../../jotai/Recruiting';

const MealAssistance = ({ target }) => {
  const options = getOptions('meal');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);
  const optionValues = options.map((obj) => Object.values(obj)[0]);
  const [input, setInput] = useAtom(atom);

  const atom = () => {
    if (target === 'careworker') {
      return CareworkerConditionsAtom;
    }

    if (target === 'recruit') {
      return RecruitingInfoAtom;
    }
  };

  const handleCheckboxChange = (value) => {
    setInput((prev) => {
      const updatedAssistance = prev.services.MEAL_ASSISTANCE.includes(value)
        ? prev.services.MEAL_ASSISTANCE.filter((item) => item !== value) // 이미 선택된 항목 제거
        : [...prev.services.MEAL_ASSISTANCE, value]; // 선택되지 않은 항목 추가

      return {
        ...prev,
        services: {
          ...prev.services,
          MEAL_ASSISTANCE: updatedAssistance,
        },
      };
    });
  };

  return (
    <Container>
      <Label>식사 보조</Label>
      <Wrapper>
        {optionKeys.map((val, idx) => (
          <Col key={idx}>
            <input
              type="checkbox"
              id={val}
              checked={input.services.MEAL_ASSISTANCE.includes(
                optionValues[idx]
              )}
              onChange={() => handleCheckboxChange(optionValues[idx])}
            />
            <label htmlFor={val}>{val}</label>
          </Col>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MealAssistance;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Col = styled.div`
  width: calc((100% - 8px) / 2);
  white-space: nowrap;
  display: flex;
  align-items: center;

  input {
    ${CheckboxStyle}
  }

  input,
  label {
    cursor: pointer;
  }
`;
