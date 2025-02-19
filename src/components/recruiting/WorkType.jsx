import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Required from '../_common/Required';
import { LabelStyle } from '../../util/common-style';
import { useAtom } from 'jotai';
import { RecruitingInfoAtom } from '../../jotai/Recruiting';
import { getKeyByValue } from '../../util/getKeyByValue';
import { getOptions } from '../../util/get-options';

const WorkType = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [input, setInput] = useAtom(RecruitingInfoAtom);

  const options = getOptions('workType');
  const optionKeys = options.map((obj) => Object.keys(obj)[0]);

  const handleChange = (idx) => {
    setSelectedIdx(idx);
    setInput((prev) => ({ ...prev, workType: Object.values(options[idx])[0] }));
  };

  useEffect(() => {
    if (input.workType) {
      const current = getKeyByValue(options, input.workType);
      setSelectedIdx(optionKeys.findIndex((val) => val === current));
    }
  }, [input.workType]);

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
            onClick={() => handleChange(idx)}
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
