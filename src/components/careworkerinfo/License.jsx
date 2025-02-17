import styled from 'styled-components';
import { useAtom } from 'jotai';
import { useState } from 'react';

import Dropdown from '../registration/Dropdown';
import Required from '../_common/Required';
import Alert from '../signup/Alert';
import { CareworkerInfoAtom } from '../../jotai/CareworkerInfo';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const License = () => {
  const [validYn, setValidYn] = useState(true);
  const [validNumYn, setValidNumYn] = useState(true);
  const [info, setInfo] = useAtom(CareworkerInfoAtom);

  return (
    <Container>
      <div>
        <Label>자격증 종류</Label>
        <Required />
      </div>
      <Wrapper>
        <Dropdown
          width="100%"
          options={getOptions('license')}
          data={info}
          setData={setInfo}
          target="license"
          exp="자격증 종류를 선택하세요"
        />
        {!validYn && <Alert text="필수 선택 자격증을 등록해주세요." />}
        <Input placeholder="자격증 번호" />
        {!validNumYn && <Alert text="자격증 번호를 확인해주세요." />}
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
