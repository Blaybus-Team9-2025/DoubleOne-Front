import styled from 'styled-components';

import Required from '../_common/Required';
import Dropdown from '../registration/Dropdown';
import { LabelStyle } from '../../util/common-style';
import { getOptions } from '../../util/get-options';

const CaringGrade = ({ setCaringGrade, error }) => {
  const options = getOptions('caringGrade');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);

  return (
    <Container>
      <div>
        <Label>장기요양등급</Label>
        <Required />
      </div>
      <Dropdown
        width="100%"
        options={optionKeys}
        onChange={(selectedKey) => {
          const selectedValue = options.find((obj) => obj[selectedKey])[
            selectedKey
          ];
          setCaringGrade(selectedValue);
        }}
        error={error}
      />
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
