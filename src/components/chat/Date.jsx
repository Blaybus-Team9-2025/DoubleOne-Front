import styled from 'styled-components';

const Date = ({ date }) => {
  return (
    <Div>
      <div>{date}</div>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  div {
    padding: 5px 20px;
    background-color: #4d4d4d; // 임시 배경색
    color: #ffffff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: default;
  }
`;

export default Date;
