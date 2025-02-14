import { useEffect } from 'react';
import styled from 'styled-components';

const DetailModal = ({ setIsOpen, children }) => {
  return (
    <Overlay>
      <ModalWrapper>
        <Button onClick={() => setIsOpen(false)}>X</Button>
        <Content>{children}</Content>
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
  max-height: 80vh;
  min-width: 300px;
  max-width: 400px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  z-index: 2500;
  padding-bottom: 20px;
  overflow-y: auto;
  position: relative;
  padding: 20px;
`;

const Button = styled.button`
  position: fixed;
  transform: translate(-140px, 0px);
  font-size: 24px;
`;

const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default DetailModal;
