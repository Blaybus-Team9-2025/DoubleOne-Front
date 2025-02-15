import styled from 'styled-components';
import { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';

import Required from '../_common/Required';

const AddressInput = () => {
  const [zonecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // 우편번호 찾기 팝업 시 뒷 배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const themeObj = {
    bgColor: '#FFFFFF',
    pageBgColor: '#FFFFFF',
    postcodeTextColor: '#3093F0',
    emphTextColor: '#222222',
  };

  const postCodeStyle = {
    width: '100%',
    height: '100%',
  };

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
  };

  const closeHandler = (state) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false);
    }
  };

  const onInputChange = (e) => {
    setDetailedAddress(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <div>
          <label htmlFor="address">
            주소
            <Required />
          </label>
          <ZoneCodeWrapper>
            <Input className="zoneCode" type="text" value={zonecode} />
            <button type="button" onClick={toggleHandler}>
              우편번호 찾기
            </button>
          </ZoneCodeWrapper>
        </div>
        <Input className="address" type="text" value={address} />
        <Input
          className="detailedAddress"
          type="text"
          value={detailedAddress}
          onChange={onInputChange}
          placeholder="상세주소를 입력해주세요"
        />
      </Wrapper>
      {isOpen && (
        <ModalWrapper>
          <Modal>
            <DaumPostcode
              theme={themeObj}
              style={postCodeStyle}
              onComplete={handleComplete}
              onClose={closeHandler}
            />
          </Modal>
          <Overlay onClick={() => setIsOpen(false)} />
        </ModalWrapper>
      )}
    </Container>
  );
};

export default AddressInput;

const Container = styled.div`
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 16px;
  }
`;

const ModalWrapper = styled.div`
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

const Modal = styled.div`
  width: calc(100% - 40px);
  max-width: 500px;
  height: 600px;
  z-index: 2500;
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

const ZoneCodeWrapper = styled.div`
  display: flex;
  gap: 8px;

  button {
    background-color: var(--green);
    box-shadow: var(--shadow);
    border-radius: 5px;
    font-size: 14px;
    flex: 0.6;
  }
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid #909090;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;

  &.zoneCode {
    flex: 0.4;
  }
`;
