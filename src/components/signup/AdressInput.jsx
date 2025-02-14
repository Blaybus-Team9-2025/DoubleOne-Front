import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import { useState } from 'react';

import Required from '../_common/Required';

const AddressInput = () => {
  const [zonecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const themeObj = {
    bgColor: '#FFFFFF',
    pageBgColor: '#FFFFFF',
    postcodeTextColor: '#C05850',
    emphTextColor: '#222222',
  };

  const postCodeStyle = {
    width: '360px',
    height: '480px',
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
        <div>
          <DaumPostcode
            theme={themeObj}
            style={postCodeStyle}
            onComplete={handleComplete}
            onClose={closeHandler}
          />
        </div>
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
