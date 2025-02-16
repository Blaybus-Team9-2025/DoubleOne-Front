import styled from 'styled-components';

import Required from '../_common/Required';
import { InputStyle } from '../../util/common-style';

const PhoneNum = () => {
  return (
    <Container>
      <label htmlFor="tel">
        휴대폰 번호
        <Required />
      </label>
      <TelWrapper>
        <Input
          type="text"
          id="tel"
          className="first"
          placeholder="010"
          name="tel1"
          maxLength={3}
        />
        <Input
          type="text"
          id="tel"
          className="second"
          placeholder="0000"
          name="tel2"
          maxLength={4}
        />
        <Input
          type="text"
          id="tel"
          className="third"
          placeholder="0000"
          name="tel3"
          maxLength={4}
        />
      </TelWrapper>
    </Container>
  );
};

export default PhoneNum;

const Input = styled.input`
  ${InputStyle}
`;

const Container = styled.div``;

const TelWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    min-width: 0;
  }
`;
