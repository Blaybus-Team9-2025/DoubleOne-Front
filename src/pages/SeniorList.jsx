import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getSeniorList } from '../api/senior';
import { getOptions } from '../util/get-options';

import Card from '../components/_common/Card';
import Header from '../components/_common/Header';
import DetailModal from '../components/detailmodal/DetailModal';
import { useSetAtom } from 'jotai';
import { IdAtom } from '../jotai/Id';
import { getKeyByValue } from '../util/getKeyByValue';

const SeniorList = () => {
  const options = getOptions('caringGrade');

  const [data, setData] = useState([
    {
      seniorId: -1,
      name: '',
      age: -1,
      gender: '',
      address: '',
      birthDate: '',
      careLevel: '',
      cohabitationStatus: '',
      dementiaSymptoms: [],
      etcDisease: '',
      height: -1,
      weight: -1,
      matchingStatus: '',
      profileImg: '',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setIdAtom = useSetAtom(IdAtom);

  useEffect(() => {
    const getData = async () => {
      const res = await getSeniorList();
      setData(res?.data);
      console.log(res.data);
    };

    getData();
  }, []);

  const handleCardClick = (id) => {
    setIdAtom({ id: id });
    setIsModalOpen(true);
  };

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
                profile={item.profileImg}
                onClick={() => handleCardClick(item.seniorId)}
              >
                <p>{item.name} 어르신</p>
                <p>
                  {item.gender === 'M' ? '남' : '여'} / 장기요양등급{' '}
                  {getKeyByValue(options, item.careLevel)}
                </p>
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
