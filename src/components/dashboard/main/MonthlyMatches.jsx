import MonthlyGraph from './MonthlyGraph';

import chevron from '../../../assets/chevron-right.png';
import styled from 'styled-components';

const MonthlyMatches = ({ current, graph }) => {
  return (
    <Div>
      <div className="text-box">
        <div>
          <p>이번달 매칭</p>
          <p>12개월 전부터 전월까지의 데이터</p>
        </div>
        <img src={chevron} />
      </div>
      <div className="graph-box">
        <p className="case">{current}건</p>
        <MonthlyGraph data={graph} />
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  padding: 26px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  margin-bottom: 15px;

  .text-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 16px;
      p:first-child {
        font-weight: 700;
      }
      p:last-child {
        color: #808080;
      }
    }
    img {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
  }

  .graph-box {
    .case {
      font-size: 36px;
      font-weight: 700;
    }
  }
`;

export default MonthlyMatches;
