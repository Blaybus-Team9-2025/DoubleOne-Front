import styled from 'styled-components';

const Alert = ({ text }) => {
  return <P>{text}</P>;
};

export default Alert;

const P = styled.p`
  color: var(--red);
  font-size: 12px;
  font-weight: bold;
`;
