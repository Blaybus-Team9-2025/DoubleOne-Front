import styled from 'styled-components';
import Card from '../components/_common/Card';
import Header from '../components/_common/Header';
import { useEffect, useState } from 'react';
import { getConditions } from '../api/condition';
import DetailModal from '../components/detailmodal/DetailModal';
import { useAtomValue, useSetAtom } from 'jotai';
import { LoginAtom } from '../jotai/Login';
import { IdAtom } from '../jotai/Id';

const JobList = () => {
  const [data, setData] = useState([
    {
      name: '김어르신',
      imgFile: null,
      seniorConditionId: 1,
      isEndMatch: false,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { managerId } = useAtomValue(LoginAtom);
  const setIdAtom = useSetAtom(IdAtom);

  useEffect(() => {
    const getData = async () => {
      const res = await getConditions(managerId);
      if (res?.status) {
        setData(res?.data);
      }
    };

    if (managerId > 0) {
      getData();
    }
  }, [managerId]);

  const handleClick = async (seniorConditionId, seniorId) => {
    await setIdAtom({
      seniorConditionId: seniorConditionId,
      seniorId: seniorId,
    });
    setIsModalOpen(true);
  };

  return (
    <Div>
      <Header title={'구인공고 목록'} />
      <div>
        <InfoWrapper>
          <p>{data.length}건</p>
        </InfoWrapper>
        <CardsDiv>
          {data?.map((item, idx) => {
            return (
              <Card
                key={idx}
                bg="green"
                onClick={() =>
                  handleClick(item.seniorConditionId, item.seniorId)
                }
                profile={item.profileImg}
              >
                <p>{item.name} 어르신</p>
                <p>
                  {item.isEndMatch ? '● 매칭이 완료되었어요' : '○ 매칭중이에요'}
                </p>
              </Card>
            );
          })}
        </CardsDiv>
      </div>
      {isModalOpen && (
        <DetailModal
          type="recruiting"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
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
  .circle {
    width: 14px;
    height: 14px;
  }
`;

export default JobList;
