import styled from 'styled-components';
import { useAtom } from 'jotai';

import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';

const CourseYn = () => {
  const [input, setInput] = useAtom(CareworkerConditionsAtom);

  return (
    <Container>
      <Label className="course">치매교육 이수 여부</Label>
      <Wrapper>
        <div>
          <label htmlFor="yes">예</label>
          <input
            type="radio"
            name="courseYn"
            id="yes"
            checked={input.hasTrained === true}
            onChange={() =>
              setInput((prev) => ({
                ...prev,
                hasTrained: true,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="no">아니오</label>
          <input
            type="radio"
            name="courseYn"
            id="no"
            checked={input.hasTrained === false}
            onChange={() =>
              setInput((prev) => ({
                ...prev,
                hasTrained: false,
              }))
            }
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default CourseYn;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.p`
  font-size: 16px;
  user-select: none;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  input,
  label {
    cursor: pointer;
  }

  label {
    margin-right: 5px;
  }
`;
