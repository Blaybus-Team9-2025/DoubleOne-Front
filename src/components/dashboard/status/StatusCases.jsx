import styled from 'styled-components';
import ToolTip from '../ToolTip';

const StatusCases = ({ waiting, inprogress, acceptance, refuse }) => {
  return (
    <Div>
      <TitleDiv>
        <p className="title">상태별 건수</p>
        <ToolTip
          text={
            '* 상태별 건수\n· 매칭 대기중 : 어르신 정보 등록 후 매칭을 요청하기 전 상태\n· 매칭중 : 매칭 요청 후 응답대기, 조율중 상태\n· 수락 : 당일 수락된 상태\n· 거절 : 당일 거절된 상태'
          }
        />
      </TitleDiv>
      <Content>
        <div>
          <p>매칭대기중</p>
          <p>{waiting}건</p>
        </div>
        <div>
          <p>매칭중</p>
          <p>{inprogress}건</p>
        </div>
        <div>
          <p>수락</p>
          <p>{acceptance}건</p>
        </div>
        <div>
          <p>거절</p>
          <p>{refuse}건</p>
        </div>
      </Content>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  padding: 26px;
  margin-bottom: 30px;
  box-shadow: var(--shadow);
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  .title {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p:first-child {
      font-size: 16px;
      font-weight: 700;
    }
    p:last-child {
      font-size: 36px;
      font-weight: 700;
    }
  }
`;

export default StatusCases;
