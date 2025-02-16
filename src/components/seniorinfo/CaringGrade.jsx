import styled from 'styled-components';

import Required from '../_common/Required';
import Dropdown from '../registration/Dropdown';
import { LabelStyle } from '../../util/common-style';

const options = [
  '등급 없음',
  '1급',
  '2급',
  '3급',
  '4급',
  '5급',
  '인지지원등급',
];

const CaringGrade = () => {
  return (
    <Container>
      <div>
        <Label>장기요양등급</Label>
        <Required />
      </div>
      <Dropdown width="100%" options={options} />
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
