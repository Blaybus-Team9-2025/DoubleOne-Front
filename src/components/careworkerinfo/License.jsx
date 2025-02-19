import styled from 'styled-components';
import { useAtom } from 'jotai';
import { useState } from 'react';

import Dropdown from '../registration/Dropdown';
import Required from '../_common/Required';
import Alert from '../signup/Alert';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';
import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';

const License = () => {
  const options = getOptions('license');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);

  const [validYn, setValidYn] = useState(true);
  const [validNumYn, setValidNumYn] = useState(true);
  const [input, setInput] = useAtom(CareworkerConditionsAtom);

  const handleLicenseTypeChange = (selectedKey) => {
    const selectedValue = options.find((obj) => obj[selectedKey])[selectedKey];

    setInput((prev) => ({
      ...prev,
      licenseDtoList: [
        {
          licenseType: selectedValue,
          licenseNum: '',
        },
      ],
    }));
  };

  const handleLicenseNumChange = (e) => {
    const { value } = e.target;

    setInput((prev) => {
      const updatedLicenseDtoList = prev.licenseDtoList.map((item, index) => {
        if (index === 0) {
          return { ...item, licenseNum: value };
        }
        return item;
      });

      return {
        ...prev,
        licenseDtoList: updatedLicenseDtoList,
      };
    });
  };

  return (
    <Container>
      <div>
        <Label>자격증 종류</Label>
        <Required />
      </div>
      <Wrapper>
        <Dropdown
          width="100%"
          options={optionKeys}
          value={
            options.find(
              (obj) =>
                Object.keys(obj)[0] === input.licenseDtoList[0]?.licenseType
            )
              ? Object.values(
                  options.find(
                    (obj) =>
                      Object.keys(obj)[0] ===
                      input.licenseDtoList[0]?.licenseType
                  )
                )[0]
              : ''
          }
          onChange={handleLicenseTypeChange}
          exp="자격증 종류를 선택해주세요"
        />
        {!validYn && <Alert text="필수 선택 자격증을 등록해주세요." />}{' '}
        <Input
          placeholder="자격증 번호를 입력하세요"
          value={input.licenseDtoList[0]?.licenseNum || ''}
          onChange={handleLicenseNumChange}
        />
        {!validNumYn && <Alert text="자격증 번호를 확인해주세요." />}{' '}
      </Wrapper>
    </Container>
  );
};

export default License;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  ${InputStyle}
`;
