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
            <p>2024.03 ~ 재직중</p>
            <p>1년 2개월</p>
          </Timeline>
          {/* 이름 클릭 시 공고로 이동 */}
          <p className="name" onClick={() => nav('/')}>
            김00님
          </p>
          <p>식사보조</p>
        </Item>
        <Item>
          <Timeline>
            <p>2024.03 ~ 재직중</p>
            <p>1년 2개월</p>
          </Timeline>
          <p className="name">김00님</p>
          <p>식사보조</p>
        </Item>
        <Item>
          <Timeline>
            <p>2024.03 ~ 재직중</p>
            <p>1년 2개월</p>
          </Timeline>
          <p className="name">김00님</p>
          <p>식사보조</p>
        </Item>
      </ItemListDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

const Line = styled.div`
  width: 1px;
  border-left: 1px solid black;
  margin-top: 8px;
`;

const ItemListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 100%;
  margin-left: 20px;
  font-size: 12px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  .name {
    font-size: 14px;
    cursor: pointer;
  }
`;

const Timeline = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
  p:last-child {
    color: var(--blue);
  }

  &::before {
    content: '●';
    position: absolute;
    left: -23px;
    top: 5px;
    font-size: 5px;
  }
`;

export default HistoryList;
