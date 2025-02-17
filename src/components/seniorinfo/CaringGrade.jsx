import styled from 'styled-components';

import Required from '../_common/Required';
import Dropdown from '../registration/Dropdown';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const CaringGrade = () => {
  return (
    <Container>
      <div>
        <Label>장기요양등급</Label>
        <Required />
      </div>
      <Dropdown width="100%" options={getOptions('caringGrade')} />
    </Container>
  );
};

export default CaringGrade;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  ${LabelStyle}
`;
