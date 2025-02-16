import styled from 'styled-components';

const Required = () => {
  return <Mark>*</Mark>;
};

export default Required;

const Mark = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: var(--red);
  margin-left: 3px;
  user-select: none;

  position: relative;
  top: 3px;
`;
