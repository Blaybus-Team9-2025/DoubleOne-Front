import styled from 'styled-components';
import ContactItem from './ContactItem';

const mock = [
  {
    isChatting: true,
    workerId: 1,
    name: '김얼리',
    addr: '서울시 관악구 대학동',
    desc: '서울복지센터 7년 근무',
  },
  {
    isChatting: true,
    workerId: 2,
    name: '김얼리',
    addr: '서울시 관악구 대학동',
    desc: '서울복지센터 7년 근무',
  },
  {
    isChatting: true,
    workerId: 3,
    name: '김얼리',
    addr: '서울시 관악구 대학동',
    desc: '서울복지센터 7년 근무',
  },
  {
    isChatting: false,
    workerId: 4,
    name: '김얼리',
    addr: '서울시 관악구 대학동',
    desc: '서울복지센터 7년 근무',
  },
  {
    isChatting: false,
    workerId: 5,
    name: '김얼리',
    addr: '서울시 관악구 대학동',
    desc: '서울복지센터 7년 근무',
  },
  {
    isChatting: false,
    workerId: 6,
    name: '김얼리',
    addr: '서울시 관악구 대학동',
    desc: '서울복지센터 7년 근무',
  },
];

const ContactList = ({ id }) => {
  return (
    <ListDiv>
      <Title>요양보호사를 선택해주세요</Title>
      <ItemWrapper>
        {mock.map((item) => {
          return (
            <ContactItem
              key={item.workerId}
              isChatting={item.isChatting}
              name={item.name}
              managerId={id}
              workerId={item.workerId}
              desc={item.desc}
              addr={item.addr}
            />
          );
        })}
      </ItemWrapper>
    </ListDiv>
  );
};

const ListDiv = styled.div`
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export default ContactList;
