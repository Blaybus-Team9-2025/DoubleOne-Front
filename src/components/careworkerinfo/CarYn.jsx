import styled from 'styled-components';
import { useAtom } from 'jotai';

import { CareworkerInfoAtom } from '../../jotai/CareworkerInfo';
import { LabelStyle } from '../../util/common-style';

const CarYn = () => {
  const [info, setInfo] = useAtom(CareworkerInfoAtom);

  return (
    <Container>
      <Label>목욕 차량 소유 여부</Label>
      <Wrapper>
        <div>
          <label htmlFor="yes">예</label>
          <input
            type="radio"
            name="carYn"
            id="yes"
            checked={info.carYn}
            onChange={() =>
              setInfo((prev) => ({
                ...prev,
                carYn: true,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="no">아니오</label>
          <input
            type="radio"
            name="carYn"
            id="no"
            checked={!info.carYn}
            onChange={() =>
              setInfo((prev) => ({
                ...prev,
                carYn: false,
              }))
            }
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default CarYn;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
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
