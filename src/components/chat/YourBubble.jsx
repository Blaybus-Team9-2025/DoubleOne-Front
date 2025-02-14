import styled from 'styled-components';

const YourBubble = ({ img, name, isFirstMsg, msg, time }) => {
  return (
    <Div>
      <ImgDiv>
        {isFirstMsg && (
          <div>
            <img src={img} />
          </div>
        )}
      </ImgDiv>
      <ContentDiv>
        {isFirstMsg && <Name>{name}</Name>}
        <BubbleDiv>
          <div>{msg}</div>
          <p>{time}</p>
        </BubbleDiv>
      </ContentDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
`;

const ImgDiv = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #d9d9d9;
    flex-shrink: 0;
    img {
      flex-shrink: 0;
    }
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 16px;
`;

const BubbleDiv = styled.div`
  display: flex;
  align-items: end;
  gap: 5px;
  font-size: 14px;
  div {
    word-break: break-all;
    max-width: 250px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid black;
  }
`;

export default YourBubble;
