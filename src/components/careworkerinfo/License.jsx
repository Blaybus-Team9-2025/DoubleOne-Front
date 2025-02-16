import styled from 'styled-components';
import { useAtom } from 'jotai';

import Dropdown from '../registration/Dropdown';
import Required from '../_common/Required';
import { CareworkerInfoAtom } from '../../jotai/CareworkerInfo';
import { InputStyle } from '../../util/common-style';

const options = ['1', '2', '3'];

const License = () => {
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
          options={options}
          data={info}
          setData={setInfo}
          target="license"
          exp="자격증 종류를 선택하세요"
        />
        <Input placeholder="자격증 번호"></Input>
      </Wrapper>
    </Container>
  );
};

export default License;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const Label = styled.label``;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  ${InputStyle}
`;
