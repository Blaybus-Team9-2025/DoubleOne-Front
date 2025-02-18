import styled from 'styled-components';
import { useState } from 'react';

import Required from '../_common/Required';
import { LabelStyle } from '../../util/common-style';

const options = [
  { 방문요양: 'HOME_CARE' },
  { 입주요양: 'LIVE_IN' },
  { 방문목욕: 'BATH' },
  { 주야간보호: 'DAY_CARE' },
  { 요양원: 'FACILITY' },
  { 병원동행: 'HOSPITAL' },
];

const WorkType = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const optionKeys = options.map((obj) => Object.keys(obj)[0]);

  return (
    <Container>
      <div>
        <Label>근무 종류</Label>
        <Required />
      </div>
      <Wrapper>
        {optionKeys.map((val, idx) => (
          <Box
            key={idx}
            isSelected={selectedIdx === idx}
            onClick={() => setSelectedIdx(idx)}
          >
            {val}
          </Box>
        ))}
      </Wrapper>
    </Container>
  );
};

export default WorkType;

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
  flex-wrap: wrap;
  gap: 8px;
`;

const Box = styled.div`
  height: 45px;
  padding: 12px 20px;
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--dark-green)' : 'var(--green)'};
  box-shadow: var(--shadow);
  white-space: nowrap;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: var(--dark-green);
  }
`;
