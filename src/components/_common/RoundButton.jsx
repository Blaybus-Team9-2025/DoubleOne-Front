import styled from 'styled-components';

const RoundButton = ({ text, color, mt, mb, onClick }) => {
  return (
    <Button onClick={onClick} className={color} mt={mt} mb={mb}>
      {text}
    </Button>
  );
};

export default RoundButton;

const Button = styled.button`
  height: 45px;
  width: 100%;
  font-size: 16px;
  border-radius: 30px;
  box-shadow: var(--shadow);
  align-items: center;
  margin-top: ${(prop) => prop.mt || 0}px;
  margin-bottom: ${(prop) => prop.mb || 0}px;
  cursor: pointer;

  &.green {
    background-color: var(--green);
  }

  &.blue {
    background-color: var(--blue);
  }
`;
