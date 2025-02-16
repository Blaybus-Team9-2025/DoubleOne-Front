import styled from 'styled-components';

import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';

const RecruitingDetail = () => {
  return (
    <Container>
      <Wrapper>
        <Label>채용 공고 제목</Label>
        <Input type="text" placeholder="지원공고 제목을 작성해주세요." />
      </Wrapper>
      <Wrapper>
        <Label>담당 센터</Label>
        <Input type="text" placeholder="요양보호센터" />
      </Wrapper>
      <Wrapper>
        <Label>담당자 성함</Label>
        <Input type="text" placeholder="박요양" />
      </Wrapper>
      <Wrapper>
        <Label>담당자 연락처</Label>
        <Input type="text" placeholder="abc@email.com" className="first" />
        <Input type="text" placeholder="010-0000-0000" />
      </Wrapper>
    </Container>
  );
};

export default RecruitingDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Input = styled.input`
  width: 100%;
  ${InputStyle}

  &.first {
    margin-bottom: 8px;
  }
`;
