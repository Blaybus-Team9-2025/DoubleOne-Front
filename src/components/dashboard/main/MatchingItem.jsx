import styled from 'styled-components';
import ToolTip from '../ToolTip';

// 매칭대기중, 매칭완료 컴포넌트
const MatchingItem = ({ bg, title, number, info }) => {
  return (
    <Div>
      <div className={`square ${bg}`} />
      <TextWrapper>
        <div className="text-box">
          <p className="title">{title}</p>
          <ToolTip text={info} />
        </div>
        <p className="value">{number}명</p>
      </TextWrapper>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  padding: 20px 10px;
  border-radius: 15px;
  box-shadow: var(--shadow);

  .square {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    flex-shrink: 0;
    &.gray {
      background-color: #d9d9d9;
    }
    &.green {
      background-color: var(--green);
    }
  }

  .value {
    font-size: 24px;
    font-weight: 700;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 15px;
  position: relative;
  display: flex;
  flex-direction: column;

  .text-box {
    display: flex;
    align-items: center;
    gap: 3px;
    .title {
      font-size: 16px;
    }
  }
`;

export default MatchingItem;
