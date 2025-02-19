import styled from 'styled-components';
import Card from '../../_common/Card';
import { useNavigate } from 'react-router-dom';
import { useAtomValue, useSetAtom } from 'jotai';
import { LoginAtom } from '../../../jotai/Login';
import { useEffect, useState } from 'react';
import { IdAtom } from '../../../jotai/Id';
import { getManagerConditions } from '../../../api/manager';

const ManagerMatchingList = () => {
  const [data, setData] = useState([
    {
      name: '김어르신',
      imgFile: null,
      address: '서울특별시',
      seniorConditionId: -1,
      seniorId: -1,
    },
  ]);

  const nav = useNavigate();

  const { managerId } = useAtomValue(LoginAtom);
  const setIdData = useSetAtom(IdAtom);

  useEffect(() => {
    const getData = async () => {
      const res = await getManagerConditions(managerId);
      if (res?.data) {
        console.log(res.data);
        setData(res.data);
      }
    };

    if (managerId > 0) {
      getData();
    }
  }, [managerId]);

  const handleClick = (id, url) => {
    setIdData({ id: id });
    nav(url);
  };

  return (
    <Div>
      <TitleDiv>
        <p>현재 매칭중인 어르신</p>
      </TitleDiv>
      <CardDiv>
        {data?.map((item, idx) => {
          return (
            <Card
              key={idx}
              bg="green"
              profile={item.profileImg}
              onClick={() =>
                handleClick(item.seniorConditionId, `/contact/${item.seniorId}`)
              }
            >
              <p>{item.name}</p>
              <p>{item.address}</p>
              <p></p>
            </Card>
          );
        })}
      </CardDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default ManagerMatchingList;
