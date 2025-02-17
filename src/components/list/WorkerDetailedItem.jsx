import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import chevron from '../../assets/chevron-right.png';
import mail from '../../assets/mail.png';
import { useState } from 'react';
import DetailModal from '../detailmodal/DetailModal';

const WorkerDetailedItem = ({ data, type }) => {
  const nav = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();

    if (type === 'acceptance') {
      setIsModalOpen(true);
    }
    if (type === 'inprogress') {
      nav(`/chat/1`); // 채팅으로 이동 & 아이디 추가 예정
    }
  };

  return (
    <Item onClick={handleClick}>
      <CheckBox />
      <TextDiv>
        <div className="text-div">
          <p>{data.name}</p>
          <p>{data.addr}</p>
          <p>{data.desc}</p>
        </div>
        <div className="icon">
          <img src={type === 'acceptance' ? chevron : mail} />
        </div>
      </TextDiv>
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={'careworker'}
      />
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
  }
`;

export default WorkerDetailedItem;
