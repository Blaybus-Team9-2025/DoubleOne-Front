import styled from 'styled-components';

import { InputStyle } from '../../util/common-style';
import { LabelStyle } from '../../util/common-style';
import { useAtom, useAtomValue } from 'jotai';
import { ManagerInfoAtom } from '../../jotai/ManagerInfo';
import { RecruitingInfoAtom } from '../../jotai/Recruiting';

const RecruitingDetail = () => {
  const managerData = useAtomValue(ManagerInfoAtom);
  const [input, setInput] = useAtom(RecruitingInfoAtom);

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, title: e.target.value }));
  };

  return (
    <Container>
      <Wrapper>
        <Label>채용 공고 제목</Label>
        <Input
          type="text"
          placeholder="지원공고 제목을 작성해주세요."
          value={input?.title}
          onChange={handleInput}
        />
      </Wrapper>
      <Wrapper>
        <Label>담당 센터</Label>
        <Input
          disabled
          type="text"
          placeholder="요양보호센터"
          value={managerData.centerName}
        />
      </Wrapper>
      <Wrapper>
        <Label>담당자 성함</Label>
        <Input
          disabled
          type="text"
          placeholder="박요양"
          value={managerData.name}
        />
      </Wrapper>
      <Wrapper>
        <Label>담당자 연락처</Label>
        <Input
          disabled
          type="text"
          placeholder="abc@email.com"
          className="first"
          value={managerData.email}
        />
        <Input
          disabled
          type="text"
          placeholder="010-0000-0000"
          value={managerData.phoneNum}
        />
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
