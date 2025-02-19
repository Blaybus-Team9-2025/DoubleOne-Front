import styled from 'styled-components';
import { useAtom } from 'jotai';

import Required from '../_common/Required';
import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import {
  EmailWorkerSignupAtom,
  EmailManagerSignupAtom,
  KakaoManagerSignupAtom,
  KakaoWorkerSignupAtom,
} from '../../jotai/Signup';
import { CareworkerInfoAtom } from '../../jotai/CareworkerInfo';

const PhoneNum = ({ required, type, target, error }) => {
  const atom = (() => {
    if (type === 'email' && target === 'worker') {
      return EmailWorkerSignupAtom;
    } else if (type === 'email' && target === 'manager') {
      return EmailManagerSignupAtom;
    } else if (type === 'kakao' && target === 'worker') {
      return KakaoWorkerSignupAtom;
    } else if (type === 'kakao' && target === 'manager') {
      return KakaoManagerSignupAtom;
    }
    if (type === 'info' && target === 'worker') {
      return CareworkerInfoAtom;
    }
  })();
  const [input, setInput] = useAtom(atom);

  const onChangeInput = (e, order) => {
    let newPhoneNum = [...input.phoneNum.split('-')];

    if (order === 1) {
      newPhoneNum[0] = e.target.value;
    } else if (order === 2) {
      newPhoneNum[1] = e.target.value;
    } else if (order === 3) {
      newPhoneNum[2] = e.target.value;
    }

    setInput((prev) => ({
      ...prev,
      phoneNum: newPhoneNum.join('-'),
    }));
  };

  return (
    <Container>
      <div>
        <Label htmlFor="tel">휴대폰 번호</Label>
        {required && <Required />}
      </div>
      <TelWrapper>
        <Input
          type="text"
          id="tel"
          className={error && 'error'}
          value={input.phoneNum.split('-')[0]}
          placeholder="010"
          name="tel1"
          maxLength={3}
          onChange={(e) => onChangeInput(e, 1)}
        />
        <Input
          type="text"
          id="tel"
          className={error && 'error'}
          value={input.phoneNum.split('-')[1] || ''}
          placeholder="0000"
          name="tel2"
          maxLength={4}
          onChange={(e) => onChangeInput(e, 2)}
        />
        <Input
          type="text"
          id="tel"
          className={error && 'error'}
          value={input.phoneNum.split('-')[2] || ''}
          placeholder="0000"
          name="tel3"
          maxLength={4}
          onChange={(e) => onChangeInput(e, 3)}
        />
      </TelWrapper>
    </Container>
  );
};

export default PhoneNum;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  ${InputStyle}

  &.error {
    border-color: var(--red);
  }
`;

const Label = styled.label`
  ${LabelStyle}
`;

const TelWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  input {
    flex: 1;
    min-width: 0;
  }
`;
