import React, { useState } from 'react';
import styled from 'styled-components';

const CoLivingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-right: 84px;
  margin-bottom: 42px;
`;

const CoLivingLabel = styled.span`
  color: #4c4c4c;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 11px;

  .asterisk {
    color: red;
  }
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const CoLivingCheckbox = styled.input`
  margin-right: 8px;
`;

const CoLiving = () => {
  // 체크박스의 상태를 배열로 관리
  const [checkedOptions, setCheckedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  // 체크박스 상태 변경 함수
  const handleCheck = (option) => {
    setCheckedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <CoLivingContainer>
      <CoLivingLabel>
        동거인 여부<span className="asterisk">*</span>
      </CoLivingLabel>
      <OptionItem>
        <CoLivingCheckbox
          type="checkbox"
          checked={checkedOptions.option1}
          onChange={() => handleCheck('option1')}
        />
        <span>독거</span>
      </OptionItem>
      <OptionItem>
        <CoLivingCheckbox
          type="checkbox"
          checked={checkedOptions.option2}
          onChange={() => handleCheck('option2')}
        />
        <span>배우자와 동거, 돌봄 시간 중 집에 있음</span>
      </OptionItem>
      <OptionItem>
        <CoLivingCheckbox
          type="checkbox"
          checked={checkedOptions.option3}
          onChange={() => handleCheck('option3')}
        />
        <span>배우자와 동거, 돌봄 시간 중 자리 비움</span>
      </OptionItem>
      <OptionItem>
        <CoLivingCheckbox
          type="checkbox"
          checked={checkedOptions.option4}
          onChange={() => handleCheck('option4')}
        />
        <span>다른 가족과 동거, 돌봄 시간 중 자리 비움</span>
      </OptionItem>
    </CoLivingContainer>
  );
};

export default CoLiving;
