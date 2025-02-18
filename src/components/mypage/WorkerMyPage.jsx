import MatchingAlarms from './careworker/MatchingAlarms';
import WorkerProfile from './careworker/WorkderProfile';
import WorkerButtonBox from './careworker/WorkerButtonBox';

const WorkerMyPage = () => {
  return (
    <div>
      <WorkerProfile />
      <WorkerButtonBox />
      <MatchingAlarms />
    </div>
  );
};

export default WorkerMyPage;
