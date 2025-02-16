import styled from 'styled-components';
import { useState } from 'react';

import Required from '../_common/Required';
import { LabelStyle } from '../../util/common-style';

const options = [
  '방문요양',
  '입주요양',
  '방문목록',
  '주야간보호',
  '요양원',
  '병원',
  '병원동행',
];

const WorkType = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <Container>
      <div>
        <Label>근무 종류</Label>
        <Required />
      </div>
      <Wrapper>
        {options.map((val, idx) => (
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
