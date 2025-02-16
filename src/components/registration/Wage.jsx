import styled from 'styled-components';

import Required from '../_common/Required';
import Dropdown from './Dropdown';
import { InputStyle } from '../../util/common-style';

const unit = ['시급', '일급', '월급', '연봉', '건당'];

const Pay = () => {
  return (
    <Container>
      <div>
        <Label>희망 시급</Label>
        <Required />
      </div>
      <Wrapper>
        <Dropdown width="25%" exp="시급" options={unit} />
        <InputWrapper>
          <Input />
          <Unit>원</Unit>
        </InputWrapper>
        <MonthlyPay>
          <p>(월급: 100000 ₩)</p>
        </MonthlyPay>
      </Wrapper>
      <Exp>최저임금(13,000원)이상 금액부터 입력이 가능합니다.</Exp>
    </Container>
  );
};

export default Pay;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InputWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const Unit = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: var(--grey);
`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  ${InputStyle}
`;

const MonthlyPay = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: end;
`;

const Exp = styled.p`
  font-size: 12px;
  text-align: center;
`;
