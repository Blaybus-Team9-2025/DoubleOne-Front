import styled from 'styled-components';

import plus from '../../assets/plus.png';

const AddInput = ({ onClick }) => {
  return (
    <Wrapper>
      <img src={plus} onClick={onClick} />
    </Wrapper>
  );
};

export default AddInput;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    cursor: pointer;
  }
`;
