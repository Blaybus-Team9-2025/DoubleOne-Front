import styled from 'styled-components';
import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import HistoryList from '../components/workerhistory/HistoryList';

import plus from '../assets/plus-nocircle.png';

const WorkerHistory = () => {
  return (
    <Div>
      <Header title={'매칭 기록'} />
      <TitleDiv>
        <Title>000요양보호사님</Title>
        <p className="text">모든 근무 기록을 확인하실 수 있습니다.</p>
        <BtnDiv>
          <button>
            <img src={plus} /> 근무 불러오기
          </button>
        </BtnDiv>
      </TitleDiv>
      <HistoryList />
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .text {
    font-size: 16px;
    margin-top: 6px;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 18px;
  button {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 30px;
    font-size: 14px;
    padding: 2px 13px;
    border-radius: 20px;
    background-color: var(--green);
  }
  img {
    width: 14px;
    height: 14px;
  }
`;

export default WorkerHistory;
