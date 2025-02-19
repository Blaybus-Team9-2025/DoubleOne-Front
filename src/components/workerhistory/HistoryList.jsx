import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HistoryList = ({ data }) => {
  const nav = useNavigate();

  return (
    <Div>
      <Line />
      <ItemListDiv>
        <Item>
          <Timeline>
            <p>2004.02 ~ 2006.01</p>
            <p>1년 11개월</p>
          </Timeline>
          {/* 이름 클릭 시 공고로 이동 */}
          <p className="name" onClick={() => nav('/')}>
            김갑수님
          </p>
          <p>식사보조</p>
        </Item>
        <Item>
          <Timeline>
            <p>2007.06 ~ 2017.05</p>
            <p>10년</p>
          </Timeline>
          <p className="name">박찬양님</p>
          <p>생활보조</p>
        </Item>
        <Item>
          <Timeline>
            <p>2020.01 ~ 재직중</p>
            <p>5년 1개월</p>
          </Timeline>
          <p className="name">이순자님</p>
          <p>방문요양</p>
        </Item>
      </ItemListDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  margin-top: 37px;
`;

const Line = styled.div`
  width: 1px;
  border-right: 1px solid black;
  margin-top: 8px;
  margin-bottom: 70px;
`;

const ItemListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 100%;
  margin-left: 20px;
  font-size: 16px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .name {
    font-size: 24px;
    cursor: pointer;
  }
`;

const Timeline = styled.div`
  display: flex;
  gap: 15px;
  position: relative;
  p:last-child {
    color: var(--blue);
  }

  &::before {
    content: '●';
    position: absolute;
    left: -25px;
    top: 4px;
    font-size: 9px;
  }
`;

export default HistoryList;
