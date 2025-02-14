import styled from 'styled-components';
import cross from '../../assets/cross.png';

const Modal = ({
  isOpen,
  onClose,
  type,
  text,
  btnText1,
  btnText2,
  onClick1,
  onClick2,
}) => {
  if (!isOpen) return null;

  return (
    <Container>
      <Overlay />
      <ModalWrapper>
        <Cross>
          {type === 'alert' && <img src={cross} onClick={onClose} />}
        </Cross>
        <TextWrapper>
          <Text>{text}</Text>
          {type === 'alert' ? (
            <Button onClick={onClose} className="btn1">
              {btnText1}
            </Button>
          ) : type === 'confirm' ? (
            <BtnWrapper>
              <Button onClick={onClick1} className="btn1">
                {btnText1}
              </Button>
              <Button onClick={onClick2} className="btn2">
                {btnText2}
              </Button>
            </BtnWrapper>
          ) : null}
        </TextWrapper>
      </ModalWrapper>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2000;
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
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalWrapper = styled.div`
  height: 270px;
  min-width: 300px;
  max-width: 400px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--shadow);
  z-index: 2500;
  padding-bottom: 20px;
`;

const Cross = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 15px 12px;

  img {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 0;
  align-items: center;
  overflow-wrap: break-word;
`;

const Text = styled.p`
  font-size: 17px;
  font-weight: bold;
  word-break: keep-all;
  text-align: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  box-shadow: var(--shadow);
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &.btn1 {
    background-color: var(--blue);
  }

  &.btn2 {
    background-color: white;
  }
`;
