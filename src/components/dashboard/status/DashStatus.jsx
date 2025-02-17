import styled from 'styled-components';
import Rate from './Rate';
import SeniorCases from './SeniorCases';
import StatusCases from './StatusCases';

const DashStatus = () => {
  return (
    <Div>
      <StatusCases waiting={33} inprogress={12} acceptance={5} refuse={5} />
      <SeniorCases average={1.57} />
      <Rate acceptance={70} refuse={30} />
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 30px;
`;

export default DashStatus;
