import styled from 'styled-components';
import ToolTip from '../ToolTip';

const SeniorCases = ({ average }) => {
  return (
    <Div>
      <TitleDiv>
        <div>
          <p className="title">어르신별 건수</p>
          <ToolTip text={'어르신 한 명당 매칭된 건수의 평균입니다.'} />
        </div>
        <p className="text">관련 설명 제시</p>
      </TitleDiv>
      <p className="value">{average}</p>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 17px 26px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  margin-bottom: 15px;

  .value {
    font-size: 36px;
    font-weight: 700;
  }
`;

const TitleDiv = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
  }

  .text {
    font-size: 16px;
    font-weight: 700;
    color: #808080;
  }
`;

export default SeniorCases;
