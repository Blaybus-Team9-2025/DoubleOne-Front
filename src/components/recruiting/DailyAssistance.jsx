import styled from 'styled-components';
import { useAtom } from 'jotai';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';

const DailyAssistance = () => {
  const options = getOptions('daily');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);
  const optionValues = options.map((obj) => Object.values(obj)[0]);
  const [input, setInput] = useAtom(CareworkerConditionsAtom);

  const handleCheckboxChange = (value) => {
    setInput((prev) => {
      const updatedAssistance = prev.services.DAILY_LIFE_SUPPORT.includes(value)
        ? prev.services.DAILY_LIFE_SUPPORT.filter((item) => item !== value) // 이미 선택된 항목 제거
        : [...prev.services.DAILY_LIFE_SUPPORT, value]; // 선택되지 않은 항목 추가

      return {
        ...prev,
        services: {
          ...prev.services,
          DAILY_LIFE_SUPPORT: updatedAssistance,
        },
      };
    });
  };

  return (
    <Container>
      <Label>일상생활</Label>
      <Wrapper>
        {optionKeys.map((val, idx) => (
          <Col key={idx}>
            <input
              type="checkbox"
              id={val}
              checked={input.services.DAILY_LIFE_SUPPORT.includes(
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

export default DailyAssistance;

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
