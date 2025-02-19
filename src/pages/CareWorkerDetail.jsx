import styled from 'styled-components';
import Header from '../components/_common/Header';
import Profile from '../components/careworkerdetail/Profile';
import Slick from '../components/careworkerdetail/Slick';
import SquareButton from '../components/_common/SquareButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getWorkerDetail, getWorkerInfo } from '../api/worker';
import { workerConditionInfoType, workerInfoType } from '../util/dataTypes';
import { getKeyByValue } from '../util/getKeyByValue';
import { getOptions } from '../util/get-options';
import { useAtomValue } from 'jotai';
import { IdAtom } from '../jotai/Id';
import { postMatching } from '../api/matching';
// import { connectWebSocket, createChatRoom } from '../api/chat';
import { LoginAtom } from '../jotai/Login';

const CareWorkerDetail = () => {
  const { seniorId, workerId, workerConditionId } = useParams();
  const [workerConditionData, setWorkerConditionData] = useState(
    workerConditionInfoType
  );
  const [workerData, setWorkerData] = useState(workerInfoType);
  const { seniorConditionId } = useAtomValue(IdAtom);
  const { memberId } = useAtomValue(LoginAtom);
  const nav = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await getWorkerDetail(workerConditionId);
      if (res?.data) {
        setWorkerConditionData(res.data);
      }
    };

    getData();
  }, [workerConditionId]);

  useEffect(() => {
    const getData = async () => {
      const res = await getWorkerInfo(workerId);
      if (res?.data) {
        setWorkerData(res.data);
      }
    };

    getData();
  }, [workerId]);

  const licenseOptions = getOptions('license');

  const sendMatching = async () => {
    const res = await postMatching(seniorConditionId, workerConditionId);
    console.log(res);
    // 목록으로 이동
    // nav(`/contact/${seniorId}/${workerId}/${workerConditionId}`);
  };

  // 채팅방 생성
  // const createChat = async () => {
  //   const res = await createChatRoom('채팅', memberId);
  //   console.log(res);
  // };

  const handleSuggestion = () => {
    // 매칭 요청
    if (seniorConditionId > 0) {
      sendMatching();
    } else {
      alert('잠시 후 시도해주세요');
    }
    // 매칭 상태 변경 요청
    // 채팅 연결 (방 생성)
    if (memberId > 0) {
      // createChat();
    } else {
      alert('잠시 후 시도해주세요');
    }
    // 채팅 화면으로 라우팅
    // nav('/chat');
  };

  return (
    <Div>
      <Header title="요양보호사 정보" />
      <Profile
        profile={workerData.profileImg}
        logo={null}
        name={workerData.name}
        cert={getKeyByValue(
          licenseOptions,
          workerConditionData.workerLicenses[0].licenseType
        )}
      />
      <Slick data={workerConditionData} />
      <SquareButton mb={35} color="green" onClick={handleSuggestion}>
        근무 제안하기
      </SquareButton>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
`;

export default CareWorkerDetail;
