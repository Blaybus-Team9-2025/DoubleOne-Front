import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MonthlyGraph = ({ data }) => {
  const maxValue = data.reduce(
    (max, item) => Math.max(max, item.value),
    -Infinity
  );
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  return (
    <GraphWrapper ref={scrollRef}>
      {data.map((item, index) => {
        const value = Math.floor((item.value / maxValue) * 100);

        return (
          <Graph key={index}>
            <Bar
              height={value}
              className={`${index === data.length - 1 && 'current'}`}
            />
            <p>{item.month}월</p>
          </Graph>
        );
      })}
    </GraphWrapper>
  );
};

const GraphWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  width: 100%;
  min-height: 40%;
  max-height: 50%;
  overflow-x: auto;
`;

const Graph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 175px;
  gap: 15px;

  p {
    font-size: 14px;
  }
`;

const Bar = styled.div`
  width: 30px;
  height: ${(props) => props.height - 5}%;
  background-color: #d9d9d9;
  border-radius: 5px;
  &.current {
    background-color: var(--green);
  }
`;

export default MonthlyGraph;
