import styled from 'styled-components';

const Header = () => {
  return (
    <Div>
      <Handle />
    </Div>
  );
};

const Div = styled.div`
  height: 24px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: relative;
  padding-top: 15px;
  padding-bottom: 4px;
`;

const Handle = styled.div`
  width: 120px;
  height: 4px;
  border-radius: 2px;
  background-color: #000000;
  margin: auto;
`;

export default Header;
