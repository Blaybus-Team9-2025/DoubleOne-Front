import styled from 'styled-components';

import { CheckboxStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';
import { useAtom } from 'jotai';
import { RecruitingInfoAtom } from '../../jotai/Recruiting';

const Benefits = () => {
  const benefitOptions = getOptions('benefits');
  const benefitOptionKeys = benefitOptions.map((obj) => Object.keys(obj)[0]);
  const benefitOptionValues = benefitOptions.map(
    (obj) => Object.values(obj)[0]
  );

  const insuranceOptions = getOptions('insurance');
  const insuranceOptionKeys = insuranceOptions.map(
    (obj) => Object.keys(obj)[0]
  );
  const insuranceOptionValues = insuranceOptions.map(
    (obj) => Object.values(obj)[0]
  );

  const [input, setInput] = useAtom(RecruitingInfoAtom);

  const handleBenefitChange = (value) => {
    setInput((prev) => {
      const updatedBenefit = prev.welfares.BENEFITS.includes(value)
        ? prev.welfares.BENEFITS.filter((item) => item !== value) // 이미 선택된 항목 제거
        : [...prev.welfares.BENEFITS, value]; // 선택되지 않은 항목 추가

      return {
        ...prev,
        welfares: {
          ...prev.welfares,
          BENEFITS: updatedBenefit,
        },
      };
    });
  };

  const handleInsuranceChange = (value) => {
    setInput((prev) => {
      const updatedInsurance = prev.welfares.INSURANCE.includes(value)
        ? prev.welfares.INSURANCE.filter((item) => item !== value) // 이미 선택된 항목 제거
        : [...prev.welfares.INSURANCE, value]; // 선택되지 않은 항목 추가

      return {
        ...prev,
        welfares: {
          ...prev.welfares,
          INSURANCE: updatedInsurance,
        },
      };
    });
  };

  return (
    <Container>
      <Label>복리 후생(복수 선택 가능)</Label>
      <Wrapper>
        {benefitOptionKeys.map((val, idx) => (
          <Col key={idx}>
            <input
              type="checkbox"
              id={val}
              checked={input?.welfares.BENEFITS.includes(
                benefitOptionValues[idx]
              )}
              onChange={() => handleBenefitChange(benefitOptionValues[idx])}
            />
            <label htmlFor={val}>{val}</label>
          </Col>
        ))}
      </Wrapper>
      <Label>보험(복수 선택 가능)</Label>
      <Wrapper>
        {insuranceOptionKeys.map((val, idx) => (
          <Col key={idx}>
            <input
              type="checkbox"
              id={val}
              checked={input?.welfares.INSURANCE.includes(
                insuranceOptionValues[idx]
              )}
              onChange={() => handleInsuranceChange(insuranceOptionValues[idx])}
            />
            <label htmlFor={val}>{val}</label>
          </Col>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Benefits;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
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
