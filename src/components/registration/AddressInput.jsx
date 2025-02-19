import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

import Required from '../_common/Required';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import {
  EmailWorkerSignupAtom,
  EmailManagerSignupAtom,
  KakaoManagerSignupAtom,
  KakaoWorkerSignupAtom,
} from '../../jotai/Signup';
import { SeniorInfoAtom } from '../../jotai/SeniorInfo';
import { CareWorkerInfoAtom } from '../../jotai/CareworkerInfo';

const AddressInput = ({ required, type, target, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  const atom = (() => {
    if (type === 'email' && target === 'worker') {
      return EmailWorkerSignupAtom;
    } else if (type === 'email' && target === 'manager') {
      return EmailManagerSignupAtom;
    } else if (type === 'kakao' && target === 'worker') {
      return KakaoWorkerSignupAtom;
    } else if (type === 'kakao' && target === 'manager') {
      return KakaoManagerSignupAtom;
    } else if (type === 'edit' && target === 'worker') {
      return CareWorkerInfoAtom;
    }

    if (type === 'info' && target === 'worker') {
      return SeniorInfoAtom;
    }
  })();

  const [input, setInput] = useAtom(atom);

  console.log(input);

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
    const { jibunAddress, zonecode } = data;
    setInput((prev) => ({
      ...prev,
      address: jibunAddress,
      zipcode: zonecode,
    }));
  };

  const closeHandler = (state) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false);
    }
  };

  const onChangeInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Wrapper>
        <div>
          <Div>
            <Label htmlFor="address">주소</Label>
            {required && <Required />}
          </Div>
          <ZoneCodeWrapper>
            <Input
              className={`zoneCode ${error && 'error'}`}
              type="text"
              value={input.zipcode}
              name="zondcode"
              onChange={onChangeInput}
            />
            <button type="button" onClick={toggleHandler}>
              우편번호 찾기
            </button>
          </ZoneCodeWrapper>
        </div>
        <Input
          className={error && 'error'}
          type="text"
          value={input.address}
          name="address"
          onChange={onChangeInput}
        />
        <Input
          className={error && 'error'}
          type="text"
          value={input.detailAddress}
          onChange={onChangeInput}
          name="detailAddress"
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
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .error {
    border-color: var(--red);
  }
`;

const Div = styled.div`
  margin-bottom: 8px;
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
    font-size: 16px;
    flex: 0.6;
  }
`;

const Input = styled.input`
  ${InputStyle}

  &.zoneCode {
    flex: 0.4;
  }
`;
