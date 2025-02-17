import styled from 'styled-components';
import cross from '../../assets/cross.png';

import CareWorkerDetail from './CareWorkerDetail';
import SeniorDetails from './SeniorDetail';
import RecruitingDetail from './RecruitingDetail';

const DetailModal = ({ type, isOpen, onClose }) => {
  if (!isOpen) return null;

  const Content =
    type === 'careworker' ? (
      <CareWorkerDetail />
    ) : type === 'senior' ? (
      <SeniorDetails />
    ) : type === 'recruiting' ? (
      <RecruitingDetail />
    ) : null;

  return (
    <Container>
      <Overlay onClick={onClose} />
      <ModalWrapper>
        <Cross onClick={onClose}>
          <img src={cross} alt="Close" />
        </Cross>
        <ContentWrapper>{Content}</ContentWrapper>
      </ModalWrapper>
    </Container>
  );
};

export default DetailModal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  max-height: 90vh;
  min-width: 260px;
  max-width: 560px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--shadow);
  z-index: 2500;
  overflow-y: auto;
  position: relative;
  padding: 20px;
`;

const Cross = styled.div`
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

const ContentWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
