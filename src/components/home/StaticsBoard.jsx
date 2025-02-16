import styled from 'styled-components';

const StaticsBoard = () => {
  return (
    <Container>
      <MonthResult>
        <p>이번 달 매칭</p>
        <GraphWrapper>
          <Graph>
            <Bar height={70} />
            <p>대기중</p>
          </Graph>
          <Graph>
            <Bar height={70} />
            <p>매칭중</p>
          </Graph>
          <Graph>
            <Bar height={100} />
            <p>수락</p>
          </Graph>
          <Graph>
            <Bar height={50} />
            <p>거절</p>
          </Graph>
        </GraphWrapper>
      </MonthResult>
    </Container>
  );
};

export default StaticsBoard;

const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  min-height: 40%;
  max-height: 50%;
  cursor: pointer;
`;

const MonthResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 25px;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
    white-space: nowrap;
  }

  & > p {
    margin-bottom: 20px;
  }
`;

const GraphWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 30px;
`;

const Graph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 20px;

  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
`;

const Bar = styled.div`
  width: 30px;
  height: ${(props) => props.height - 5}%;
  background-color: var(--green);
  border-radius: 5px;
`;
