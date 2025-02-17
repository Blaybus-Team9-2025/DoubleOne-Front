import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Header from '../components/_common/Header';
import MathcingListItem from '../components/list/MathcingListItem';

const mock = [
  {
    id: 1,
    name: '김얼리',
    age: 67,
    addr: '경기도 수원시',
    workers: [
      {
        name: '최고양',
        addr: '서울시 관악구 대학동',
        desc: '제주복지센터 7년 근무',
      },
      {
        name: '김요양',
        addr: '서울시 관악구 대학동',
        desc: '서울복지센터 7년 근무',
      },
      {
        name: '이친절',
        addr: '제주특별자치도 대학동',
        desc: '서울복지센터 10년 근무',
      },
    ],
  },
  {
    id: 2,
    name: '유유유',
    age: 60,
    addr: '대구광역시',
    workers: [
      {
        name: '최고양',
        addr: '서울시 관악구 대학동',
        desc: '제주복지센터 7년 근무',
      },
      {
        name: '김요양',
        addr: '서울시 관악구 대학동',
        desc: '서울복지센터 7년 근무',
      },
      {
        name: '이친절',
        addr: '제주특별자치도 대학동',
        desc: '서울복지센터 10년 근무',
      },
    ],
  },
  {
    id: 3,
    name: '나필요',
    age: 88,
    addr: '경기도 하남시',
    workers: [
      {
        name: '최고양',
        addr: '서울시 관악구 대학동',
        desc: '제주복지센터 7년 근무',
      },
      {
        name: '김요양',
        addr: '서울시 관악구 대학동',
        desc: '서울복지센터 7년 근무',
      },
      {
        name: '이친절',
        addr: '제주특별자치도 대학동',
        desc: '서울복지센터 10년 근무',
      },
    ],
  },
];

const MatchingList = () => {
  const { type } = useParams();

  return (
    <Div>
      <Header title={'매칭 기록'} />
      <ItemWrapper>
        {mock.map((item, index) => {
          return (
            <MathcingListItem
              key={index}
              id={item.id}
              name={item.name}
              age={item.age}
              addr={item.addr}
              profile={null}
              workers={item.workers}
              type={type}
            />
          );
        })}
      </ItemWrapper>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default MatchingList;
