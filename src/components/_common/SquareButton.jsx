import styled from 'styled-components';

const SquareButton = ({ children, onClick, mt, mb, color }) => {
  return (
    <Button mt={mt} mb={mb} className={color} onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  margin-top: ${(props) => props.mt ?? 0}px;
  margin-bottom: ${(props) => props.mb ?? 0}px;
  font-size: 18px;
  font-weight: 700;
  padding: 18px 0;
  border-radius: 15px;
  box-shadow: var(--shadow);
  cursor: pointer;

  &.green {
    background-color: var(--green);
  }
  &.blue {
    background-color: var(--blue);
  }
  &.white {
    background-color: #ffffff;
  }
`;

export default SquareButton;
