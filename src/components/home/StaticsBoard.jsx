import styled from 'styled-components';

const StaticsBoard = () => {
  return (
    <Container>
      <Wrapper>
        <Box className="inProgress">
          <Label>매칭 진행중</Label>
          <Percentage>57%</Percentage>
        </Box>
        <Box className="complete">
          <Label>매칭 완료</Label>
          <Percentage>89%</Percentage>
        </Box>
      </Wrapper>
      <MonthResult>
        <p className="title">이번 달 매칭</p>
        <GraphWrapper>
          <Graph>
            <Bar height={100} />
            <p>성공</p>
          </Graph>
          <Graph>
            <Bar height={50} />
            <p>거절</p>
          </Graph>
          <Graph>
            <Bar height={70} />
            <p>대기</p>
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
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  cursor: pointer;

  &.inProgress {
    background-color: rgba(193, 230, 120, 0.5);
  }

  &.complete {
    background-color: var(--green);
  }
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Percentage = styled.p`
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MonthResult = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 25px;
  cursor: pointer;

  p {
    font-size: 16px;
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
  gap: 20px;
`;

const Graph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;

  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
`;

const Bar = styled.div`
  width: 20px;
  height: ${(props) => props.height - 5}%;
  background-color: var(--blue);
  border-radius: 40px;
  box-shadow: var(--shadow);
`;
