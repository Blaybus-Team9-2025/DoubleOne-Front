import styled from 'styled-components';

import chevron from '../../../assets/chevron-right.png';
import { useNavigate } from 'react-router-dom';

const CaseItem = ({ data }) => {
  const nav = useNavigate();

  const handleClick = () => {
    if (data.url) {
      nav(`/list/${data.url}`);
    }
  };

  return (
    <Div className={`${data.bg}`} onClick={handleClick}>
      <TitleDiv>
        <p>{data.title}</p>
        <p>{data.text}</p>
      </TitleDiv>
      <ValueDiv>
        <p>{data.value}건</p>
        <div>{data.url && <img src={chevron} />}</div>
      </ValueDiv>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  padding: 20px 15px;
  padding-left: 26px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: var(--shadow);

  &.white {
    background-color: #ffffff;
  }
  &.green {
    background-color: var(--green);
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;

  p:first-child {
    font-size: 24px;
    font-weight: 700;
  }
  p:last-child {
    color: #808080;
    font-size: 14px;
    word-break: break-all;
    white-space: pre-line;
  }
`;

const ValueDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 36px;
    font-weight: 700;
    flex-shrink: 0;
  }

  div {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
    }
  }
`;

export default CaseItem;
