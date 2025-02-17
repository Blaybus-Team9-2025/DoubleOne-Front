import styled from 'styled-components';
import ToolTip from '../ToolTip';

const Rate = ({ acceptance, refuse }) => {
  return (
    <Div>
      <Content>
        <TitleDiv>
          <p className="title">수락률</p>
          <ToolTip
            text={'전체 매칭 요청 건수 중 전체 매칭 수락 건수의 백분율'}
          />
        </TitleDiv>
        <p className="value">{acceptance}%</p>
      </Content>
      <Content>
        <TitleDiv>
          <p className="title">거절률</p>
          <ToolTip
            text={'전체 매칭 요청 건수 중 전체 매칭 거절 건수의 백분율'}
          />
        </TitleDiv>
        <p className="value">{refuse}%</p>
      </Content>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 26px;
  border-radius: 15px;
  box-shadow: var(--shadow);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .value {
    font-size: 36px;
    font-weight: 700;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  .title {
    font-size: 16px;
    font-weight: 700;
  }
`;

export default Rate;
