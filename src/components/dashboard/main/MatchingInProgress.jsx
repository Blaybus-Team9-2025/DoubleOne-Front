import styled from 'styled-components';
import chevron from '../../../assets/chevron-right.png';
import { useNavigate } from 'react-router-dom';

const MatchingInprogress = ({ current }) => {
  const nav = useNavigate();

  return (
    <Div onClick={() => nav('/dashboard/matching')}>
      <div className="square" />
      <div className="text-box">
        <p>매칭중</p>
        <p>매칭 요청 후 응답대기, 조율중 상태와 당일 수락, 거절 상태</p>
      </div>
      <p className="value">{current}명</p>
      <img src={chevron} className="chevron" />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  box-shadow: var(--shadow);
  margin-bottom: 10px;

  .square {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    background-color: var(--blue);
    flex-shrink: 0;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    p:first-child {
      font-size: 24px;
    }
    p:last-child {
      font-size: 14px;
      color: #808080;
      word-break: break-all;
    }
  }

  .value {
    font-size: 24px;
    font-weight: 700;
    flex-shrink: 0;
    padding: 0 5px;
  }

  .chevron {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export default MatchingInprogress;
