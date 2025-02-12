import styled from 'styled-components';

const Title = ({ children, mb }) => {
  return <Div mb={mb}>{children}</Div>;
};

export default Title;

const Div = styled.div`
  margin-bottom: ${(props) => props.mb}px;
  font-size: 32px;
  font-weight: bold;

  p {
    font-weight: bold;
    margin: 0px 0px 0px 0px;
    line-height: 120%;
  }
`;
