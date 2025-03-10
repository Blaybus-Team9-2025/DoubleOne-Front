import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import chevron from '../../assets/chevron-right.png';
import mail from '../../assets/mail.png';
import { useSetAtom } from 'jotai';
import { CareWorkerPeriodsAtom } from '../../jotai/CareworkerInfo';

const ContactItem = ({
  isChatting,
  seniorId,
  workerId,
  workerConditionId,
  name,
  addr,
  desc,
  workPeriods,
}) => {
  const nav = useNavigate();
  const setWorkPeriodsData = useSetAtom(CareWorkerPeriodsAtom);

  const handleClick = (url) => {
    setWorkPeriodsData({ workPeriods: [...workPeriods] });
    nav(url);
  };

  return (
    <Item
      className={`${isChatting && 'blue'}`}
      onClick={() =>
        handleClick(`/contact/${seniorId}/${workerId}/${workerConditionId}`)
      }
    >
      <CheckBox className={`${isChatting && 'blue'}`}>
        <Box className={`${isChatting && 'blue'}`} />
      </CheckBox>
      <TextDiv>
        <div className="text-div">
          <p>{name}</p>
          <p>{addr}</p>
          <p>{desc}</p>
        </div>
        <div className="icon">
          <img src={chevron} />
          {isChatting && (
            <div className="msg">
              <img src={mail} />
            </div>
          )}
        </div>
      </TextDiv>
    </Item>
  );
};

const Item = styled.div`
  width: 100%;
  height: 98px;
  box-shadow: var(--shadow);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  &.blue {
    background-color: var(--blue);
  }
`;

const CheckBox = styled.div`
  width: 34px;
  height: 34px;
  background-color: #d9d9d9;
  border-radius: 5px;
  margin-left: 15px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &.blue {
    background-color: #ffffff;
  }
`;

const Box = styled.div`
  width: 20px;
  height: 20px;
  background-color: #d9d9d9;
  border-radius: 2px;
  &.blue {
    background-color: var(--blue);
  }
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

  .text-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .msg {
      width: 34px;
      height: 34px;
      border-radius: 5px;
      background-color: #ffffff;
      padding: 5px;
    }
  }
`;

export default ContactItem;
