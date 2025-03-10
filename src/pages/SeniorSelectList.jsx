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
import { useNavigate } from 'react-router-dom';

const SeniorSelectList = () => {
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
  const nav = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await getSeniorList('unmatched');
      setData(res?.data);
      console.log(res.data);
    };

    getData();
  }, []);

  const handleCardClick = (id) => {
    setIdAtom({ id: id });
    nav('/recruiting/1');
  };

  return (
    <Div>
      <Header title={'어르신 목록'} />
      <div>
        <InfoWrapper>
          <p>구인공고를 등록할 어르신을 선택해주세요</p>
          <p>{data.length}건</p>
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
  flex-direction: column;
  padding: 0 13px;
  margin-bottom: 13px;
  width: 100%;
  p {
    font-size: 18px;
    font-weight: 700;
  }
  p:last-child {
    display: flex;
    justify-content: end;
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

export default SeniorSelectList;
