import styled from 'styled-components';
import { useState } from 'react';

import Dropdown from '../signup/Dropdown';
import Required from '../_common/Required';
import AddInput from './AddInput';

const License = () => {
  const [dropdowns, setDropdowns] = useState([0]);

  const addDropdown = () => {
    if (dropdowns.length < 5) {
      setDropdowns((prev) => [...prev, prev.length]);
    }
  }; 

  return (
    <Container>
      <div>
        <Label>희망 근무 지역</Label>
        <Required />
      </div>
      {dropdowns.map((key) => (
        <Wrapper key={key}>
          <Dropdown width="100%" />
          <DropdownWrapper>
            <Dropdown width="50%" />
            <Dropdown width="50%" />
          </DropdownWrapper>
        </Wrapper>
      ))}
      <AddInput onClick={addDropdown} />
    </Container>
  );
};

export default License;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;
