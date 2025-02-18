import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import WorkerDetailedItem from './WorkerDetailedItem';
import Card from '../_common/Card';
import SquareButton from '../_common/SquareButton';
import Modal from '../_common/Modal';

import chevron from '../../assets/chevron-right.png';

const MathcingListItem = ({ id, name, age, addr, profile, workers, type }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isTerminationModalOpen, setIsTerminationModalOpen] = useState(false);

  const nav = useNavigate();

  const handleTerminationClick = (e) => {
    e.stopPropagation();
    setIsTerminationModalOpen(true);
  };

  return (
    <div>
      {isCardOpen ? (
        <OpenedCardDiv onClick={() => nav(`/editseniorinfo/${id}`)}>
          <CardDiv>
            <div className="img-box">
              <img src={profile} />
            </div>
            <TextDiv>
              <div>
                <p>
                  {name} 어르신, {age}세
                </p>
                <p>{addr}</p>
              </div>
              <img src={chevron} />
            </TextDiv>
          </CardDiv>
          <WorkerDiv>
            {workers.map((item, index) => {
              return <WorkerDetailedItem key={index} data={item} type={type} />;
            })}
            {type === 'acceptance' && (
              <SquareButton color="white" onClick={handleTerminationClick}>
                계약종료
              </SquareButton>
            )}
          </WorkerDiv>
        </OpenedCardDiv>
      ) : (
        <Card
          onClick={() => setIsCardOpen(true)}
          bg={'green'}
          profile={profile}
        >
          <p>
            {name} 어르신, {age}세
          </p>
          <p>{addr}</p>
        </Card>
      )}
      <Modal
        isOpen={isTerminationModalOpen}
        onClose={() => setIsTerminationModalOpen(false)}
        btnText1={'아니오'}
        btnText2={'예'}
        onClick1={() => setIsTerminationModalOpen(false)}
        onClick2={() => console.log('계약 종료 api 연결 예정')}
        text={'매칭을 종료하시겠습니까?'}
        type={'confirm'}
      />
    </div>
  );
};

const OpenedCardDiv = styled.div`
  width: 100%;
  box-shadow: var(--shadow);
  background-color: var(--green);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
`;

const CardDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 13px;
  padding-bottom: 8px;

  .img-box {
    width: 75px;
    height: 75px;
    border-radius: 15px;
    background-color: #ffffff;
    flex-shrink: 0;
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
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const WorkerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default MathcingListItem;
