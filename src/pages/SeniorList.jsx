import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getSeniorList } from '../api/senior';

import Card from '../components/_common/Card';
import Header from '../components/_common/Header';
import DetailModal from '../components/detailmodal/DetailModal';

const SeniorList = () => {
  const [data, setData] = useState([
    {
      seniorId: -1,
      name: '',
      age: -1,
      gender: '',
      address: '',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await getSeniorList();
      setData(res?.data);
    };

    getData();
  }, []);

  return (
    <Div>
      <Header title={'어르신 목록'} />
      <div>
        <InfoWrapper>
          <p>{data.length}건</p>
          <select name="filter" id="filter">
            <option value={'latest'}>최신등록순</option>
            <option value={'incomplete'}>매칭 미완료순</option>
            <option value={'grade'}>요양 등급순</option>
          </select>
        </InfoWrapper>
        <CardsDiv>
          {data?.map((item) => {
            return (
              <Card
                key={item.seniorId}
                bg="green"
                profile={item.profile}
                onClick={() => setIsModalOpen(true)}
              >
                <p>{item.name} 어르신</p>
                <p>{item.gender === 'M' ? '남' : '여'} / 장기요양등급 2급</p>
                <p>{item.address}</p>
              </Card>
            );
          })}
        </CardsDiv>
      </div>
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={'senior'}
      />
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 13px;
  margin-bottom: 13px;
  p {
    font-size: 18px;
    font-weight: 700;
  }
  select {
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 16px;
  }
`;

const CardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default SeniorList;
