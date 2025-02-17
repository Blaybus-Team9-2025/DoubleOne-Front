import styled from 'styled-components';

import SquareButton from '../../_common/SquareButton';
import Contract from './Contract';
import CareWorkerDetail from '../../detailmodal/CareWorkerDetail';

import close from '../../../assets/close.png';

const ContractModal = ({ setIsOpen, type }) => {
  return (
    <Overlay>
      <ModalWrapper>
        <CloseButton>
          <img src={close} onClick={() => setIsOpen(false)} />
        </CloseButton>
        <Content>
          {type === 'senior' ? <Contract /> : <CareWorkerDetail />}
        </Content>
        {type === 'senior' && (
          <ButtonWrapper>
            <SquareButton color={'blue'}>거절</SquareButton>
            <SquareButton color={'green'}>수락</SquareButton>
          </ButtonWrapper>
        )}
      </ModalWrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  max-height: 90svh;
  min-width: 260px;
  max-width: 560px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  z-index: 2500;
  overflow-y: auto;
  position: relative;
  padding: 20px;
`;

const CloseButton = styled.div`
  position: fixed;
  width: calc(100% - 40px);
  min-width: 260px;
  max-width: 560px;
  padding-right: 20px;
  display: flex;
  justify-content: end;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default ContractModal;
