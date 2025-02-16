import styled from 'styled-components';
import { useAtom } from 'jotai';

import { CareworkerInfoAtom } from '../../jotai/CareworkerInfo';

const CourseYn = () => {
  const [info, setInfo] = useAtom(CareworkerInfoAtom);

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
            checked={info.courseYn}
            onChange={() =>
              setInfo((prev) => ({
                ...prev,
                courseYn: true,
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
            checked={!info.courseYn}
            onChange={() =>
              setInfo((prev) => ({
                ...prev,
                courseYn: false,
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
