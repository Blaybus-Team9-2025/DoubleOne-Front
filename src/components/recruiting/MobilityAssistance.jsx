import styled from 'styled-components';
import { useAtom } from 'jotai';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';
import { RecruitingInfoAtom } from '../../jotai/Recruiting';
import { useMemo } from 'react';

const MobilityAssistance = ({ target }) => {
  const options = getOptions('mobility');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);
  const optionValues = options.map((obj) => Object.values(obj)[0]);

  const atom = useMemo(
    () =>
      target === 'recruit' ? RecruitingInfoAtom : CareworkerConditionsAtom,
    [target]
  );
  const [input, setInput] = useAtom(atom);

  const handleCheckboxChange = (value) => {
    setInput((prev) => {
      const updatedAssistance = prev.services.MOBILITY_ASSISTANCE.includes(
        value
      )
        ? prev.services.MOBILITY_ASSISTANCE.filter((item) => item !== value) // 이미 선택된 항목 제거
        : [...prev.services.MOBILITY_ASSISTANCE, value]; // 선택되지 않은 항목 추가

      return {
        ...prev,
        services: {
          ...prev.services,
          MOBILITY_ASSISTANCE: updatedAssistance,
        },
      };
    });
  };

  return (
    <Container>
      <Label>이동 보조</Label>
      <Wrapper>
        {optionKeys.map((val, idx) => (
          <Col key={idx}>
            <input
              type="checkbox"
              id={val}
              checked={input?.services.MOBILITY_ASSISTANCE.includes(
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

export default MobilityAssistance;

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
