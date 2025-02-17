import styled from 'styled-components';
import CaseList from './CaseList';

const DashMatching = () => {
  return (
    <Div>
      <CaseList waiting={50} inprogress={30} acceptance={100} refuse={80} />
    </Div>
  );
};

const Div = styled.div`
  margin-top: -20px;
  height: 90vh;
`;

export default DashMatching;
