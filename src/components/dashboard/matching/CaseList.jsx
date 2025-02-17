import { useEffect, useState } from 'react';
import CaseItem from './CaseItem';
import styled from 'styled-components';

const CaseList = ({ waiting, inprogress, acceptance, refuse }) => {
  const [items, setItems] = useState([
    {
      title: '',
      text: '',
      value: '',
      bg: '',
      url: '',
    },
  ]);

  useEffect(() => {
    if (waiting && inprogress && acceptance && refuse) {
      setItems([
        {
          title: '응답대기',
          text: '매칭 요청 후\n요양보호사의 답변을 기다리는 상태',
          value: waiting,
          bg: 'white',
          url: '',
        },
        {
          title: '조율요청',
          text: '요양보호사가 조율 또는\n수정을 요청한 상태',
          value: inprogress,
          bg: 'green',
          url: 'inprogress',
        },
        {
          title: '수락',
          text: '요양보호사가\n매칭을 수락한 상태',
          value: acceptance,
          bg: 'green',
          url: 'acceptance',
        },
        {
          title: '거절',
          text: '요양보호사가\n매칭을 거절한 상태',
          value: refuse,
          bg: 'white',
          url: '',
        },
      ]);
    }
  }, [waiting, inprogress, acceptance, refuse]);

  return (
    <Div>
      {items.map((item, index) => {
        return <CaseItem key={index} data={item} />;
      })}
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export default CaseList;
