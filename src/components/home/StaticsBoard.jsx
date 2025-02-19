import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginAtom } from '../../jotai/Login';
import { getMatchingStat } from '../../api/matching';

const StaticsBoard = () => {
  const params = useParams();
  const { type } = params;
  const nav = useNavigate();

  const { managerId } = useAtomValue(LoginAtom);

  const [data, setData] = useState({
    totalMatchCount: 0,
    newMatchCount: 0,
    typeCountList: {
      BEFORE_REQUEST: 0,
      IN_PROGRESS: 0,
      COMPLETED: 0,
      WATING: 0,
      PENDING: 0,
      ACCEPTED: 0,
      REJECTED: 0,
    },
    acceptanceRate: 0,
    rejectionRate: 0,
    seniorList: [
      {
        seniorId: -1,
        name: '',
        matchStatus: '',
      },
    ],
  });

  useEffect(() => {
    const getData = async () => {
      const res = await getMatchingStat(managerId);
      if (res?.data) {
        console.log(res.data);
        setData(res.data);
      }
    };

    if (managerId > 0) {
      getData();
    }
  }, [managerId]);

  // 비율 계산 함수
  const getBarHeight = (count) => {
    return data.totalMatchCount > 0 ? (count / data.totalMatchCount) * 100 : 0;
  };

  return (
    <Container onClick={() => nav('/dashboard/status')}>
      <MonthResult>
        <p>이번 달 매칭</p>
        <GraphWrapper>
          <Graph>
            <Bar height={getBarHeight(data.typeCountList.WATING)} />
            <p>대기중</p>
          </Graph>
          <Graph>
            <Bar height={getBarHeight(data.typeCountList.IN_PROGRESS)} />
            <p>매칭중</p>
          </Graph>
          <Graph>
            <Bar height={data.acceptanceRate} />
            <p>수락</p>
          </Graph>
          <Graph>
            <Bar height={data.rejectionRate} />
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
