import styled from 'styled-components';

import SeniorInfo from './SeniorInfo';
import WorkerInfo from './WorkerInfo';

const Contract = () => {
  return (
    <Div>
      <div>
        <p className="big">요청 기관: 서울노인복지센터</p>
        <p className="big">요청인: 김어스 요양보호사</p>
      </div>
      <SeniorInfo />
      <WorkerInfo />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .big {
    font-size: 24px;
    font-weight: 700;
  }
  .small {
    font-size: 16px;
  }

  .title {
    margin-bottom: 18px;
  }
  .item-div {
    padding-bottom: 28px;
  }
`;

export default Contract;
