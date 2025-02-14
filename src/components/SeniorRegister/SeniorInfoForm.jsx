import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #ffffff;
  height: 2149px;
`;

const SeniorInfoForm = () => {
  return (
    <Container>
      <Content>
        <Header title="어르신 정보등록" />
      </Content>
    </Container>
  );
};

export default SeniorInfoForm;
