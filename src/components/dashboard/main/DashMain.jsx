import styled from 'styled-components';
import MatchingInprogress from './MatchingInProgress';
import MatchingItem from './MatchingItem';
import MonthlyMatches from './MonthlyMatches';
import TotalMatches from './TotalMatches';
import { useNavigate } from 'react-router-dom';

const mockGraph = [
  {
    month: 3,
    value: 89,
  },
  {
    month: 4,
    value: 101,
  },
  {
    month: 5,
    value: 32,
  },
  {
    month: 6,
    value: 12,
  },
  {
    month: 7,
    value: 66,
  },
  {
    month: 8,
    value: 20,
  },
  {
    month: 9,
    value: 150,
  },
  {
    month: 10,
    value: 46,
  },
  {
    month: 11,
    value: 40,
  },
  {
    month: 12,
    value: 89,
  },
  {
    month: 1,
    value: 50,
  },
  {
    month: 2,
    value: 24,
  },
];

const DashMain = () => {
  return (
    <Div>
      <TotalMatches total={4532} current={13} />
      <MonthlyMatches current={24} graph={mockGraph} />
      <MatchingInprogress current={3} />
      <div className="items-box">
        <MatchingItem
          bg={'gray'}
          title={'매칭대기중'}
          number={12}
          info={'어르신 정보 등록 후\n매칭을 요청하기 전 상태'}
        />
        <MatchingItem
          bg={'green'}
          title={'매칭완료'}
          number={5}
          info={'매칭 요청이 수락되어\n익일 매칭이 확정된 상태'}
        />
      </div>
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 30px;

  .items-box {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;

export default DashMain;
