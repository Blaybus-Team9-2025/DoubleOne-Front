import styled from 'styled-components';
import { useEffect, useState } from 'react';

import arrow from '../../assets/arrow-right.png';
import ContractModal from './contract/ContractModal';

const WorkerChatProfile = () => {
  // 요양사 상세보기 모달
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <Div>
      <Title>요양보호사 상세정보 보기</Title>
      <BoxDiv onClick={() => setIsOpen(true)}>
        <Content>
          <p className="dot">성별: 여</p>
          <p className="dot">나이: 78세</p>
          <p className="dot">요양보호사 1급</p>
        </Content>
        <Content>
          <div>
            <p className="dot">근무지역</p>
            <p>서울특별시 관악구 대학동</p>
          </div>
          <div>
            <p className="dot">근무시간</p>
            <p>월 14:00-15:00</p>
          </div>
          <div>
            <p className="dot">근무종류</p>
            <p>방문요양</p>
          </div>
        </Content>
        <div className="icon">
          <img src={arrow} />
        </div>
      </BoxDiv>
      {isOpen && <ContractModal setIsOpen={setIsOpen} type="careWorker" />}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const BoxDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background-color: var(--blue);
  border-radius: 10px;
  margin-bottom: 30px;
  .icon {
    display: flex;
    align-items: end;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: #ffffff;
  p {
    padding-left: 20px;
    position: relative;
    font-weight: 700;
  }
  .dot::before {
    content: '●';
    position: absolute;
    left: 8px;
    top: 5px;
    font-size: 5px;
  }
`;

export default WorkerChatProfile;
