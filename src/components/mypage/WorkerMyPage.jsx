import { useAtomValue } from 'jotai';
import MatchingAlarms from './careworker/MatchingAlarms';
import WorkerProfile from './careworker/WorkderProfile';
import WorkerButtonBox from './careworker/WorkerButtonBox';
import { LoginAtom } from '../../jotai/Login';
import { useEffect, useState } from 'react';
import { getWorkerRequests } from '../../api/worker';

const WorkerMyPage = () => {
  const { workerId } = useAtomValue(LoginAtom);
  const [data, setData] = useState({
    profileImg: null,
    name: '',
    matchingAlarmlist: [
      {
        matchingId: 0,
        chatRoomId: 0,
        seniorSchedules: [],
        centerName: '',
        address: '',
        managerId: 0,
      },
    ],
  });

  useEffect(() => {
    const getData = async () => {
      const res = await getWorkerRequests(workerId);
      if (res?.data) {
        setData(res.data);
      }
    };

    if (workerId > 0) {
      getData();
    }
  }, [workerId]);

  return (
    <div>
      <WorkerProfile name={data.name} profile={data.profileImg} />
      <WorkerButtonBox />
      <MatchingAlarms data={data.matchingAlarmlist} />
    </div>
  );
};

export default WorkerMyPage;
