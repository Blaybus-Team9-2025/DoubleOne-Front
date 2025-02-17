import styled from 'styled-components';

const TotalMatches = ({ total, current }) => {
  return (
    <Div>
      <div>
        <p>전체매칭</p>
        <p>{total}건</p>
      </div>
      <div>
        <p>신규매칭</p>
        <p>{current}건</p>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 26px;
  width: 100%;
  border-radius: 15px;
  box-shadow: var(--shadow);
  margin-bottom: 26px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    p:first-child {
      font-size: 24px;
    }
    p:last-child {
      font-size: 36px;
    }
  }
`;

export default TotalMatches;
