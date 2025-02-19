import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import SquareButton from '../_common/SquareButton';
import logo from '../../assets/logo.png';

const MenuBoard = ({ type }) => {
  const nav = useNavigate();

  return (
    <Container className={type === 'manager' && 'manager'}>
      <Header>
        <ProfileWrapper>
          <ProfileImg>
            <img src={logo} />
          </ProfileImg>
          <p className="name">얼리 님</p>
        </ProfileWrapper>
        <Role>{type === 'manager' ? '관리자' : '요양사'}</Role>
      </Header>
      {type === 'manager' ? (
        <BoxWrapper>
          <Box className="inProgress">
            <Label>매칭 진행중</Label>
            <Percentage>
              57<span>건</span>
            </Percentage>
          </Box>
          <Box className="complete">
            <Label>매칭 완료</Label>
            <Percentage>
              89<span>건</span>
            </Percentage>
          </Box>
        </BoxWrapper>
      ) : (
        <DailySchedule>
          <p>오늘의 일정</p>
          <Div>
            <Bar />
            <Text>
              <Time>12:00 ~ 1:00</Time>
              <Name>김ㅇㅇ 어르신</Name>
            </Text>
          </Div>
        </DailySchedule>
      )}
      {type === 'manager' ? (
        <SquareButton color="white" onClick={() => nav('/seniorinfo/register')}>
          <p>어르신 등록하기</p>
        </SquareButton>
      ) : (
        <SquareButton color="white" onClick={() => nav('/careworkerinfo/1')}>
          <p>요양보호사 등록하기</p>
        </SquareButton>
      )}
    </Container>
  );
};

export default MenuBoard;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;

  &.time {
    font-size: 24px;
    font-weight: bold;
  }

  &.name {
    font-size: 18px;
  }
`;

const Time = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Name = styled.p`
  font-size: 18px;
`;

const DailySchedule = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--white);
  border-radius: 10px;
  padding: 20px 25px;
  margin-bottom: 30px;

  & > p {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Div = styled.div`
  display: flex;
`;

const Bar = styled.div`
  background-color: black;
  border-radius: 3px;
  width: 6px;
  margin-right: 10px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: var(--green);
  border-radius: 20px 20px 0 0;
  padding: 20px;
  margin: 0 -20px;
  flex: 1;

  &.manager {
    background-color: var(--blue);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Role = styled.p`
  font-size: 18px;
  font-weight: bold;
  user-select: none;
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  margin-right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

const BoxWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 45%;
  gap: 20px;
  margin-bottom: 30px;
`;

const Box = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  cursor: pointer;

  &.inProgress {
    background-color: var(--white);
  }

  &.complete {
    background-color: var(--green);
  }
`;

const Label = styled.p`
  font-size: 16px;
  white-space: nowrap;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Percentage = styled.p`
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    font-size: 24px;
    position: relative;
    bottom: 8px;
  }
`;
