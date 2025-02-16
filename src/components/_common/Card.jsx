import styled from 'styled-components';
import chevron from '../../assets/chevron-right.png';

const Card = ({ bg, children, onClick }) => {
  return (
    <Div bg={bg} onClick={onClick}>
      <ImgDiv>
        <img />
      </ImgDiv>
      <TextDiv>
        <div>{children}</div>
        <img src={chevron} />
      </TextDiv>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 98px;
  box-shadow: var(--shadow);
  background-color: ${(props) =>
    props.bg ? 'var(--' + props.bg + ')' : 'white'};
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 15px;
  background-color: #ffffff;
  flex-shrink: 0;
`;

const TextDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 12px;
  }
  p:first-child {
    font-size: 18px;
    font-weight: 700;
  }
  img {
    width: 24px;
    height: 24px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export default Card;
