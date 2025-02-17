import { Route, Routes } from 'react-router-dom';

import './App.css';
import Splash from './pages/Splash';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpSelect from './pages/SignUpSelect';
import Contact from './pages/Contact';
import CareWorkerDetail from './pages/CareWorkerDetail';
import CareWorkerInfo from './pages/CareWorkerInfo';
import Chat from './pages/Chat';
import SeniorList from './pages/SeniorList';
import JobList from './pages/JobList';
import Menu from './pages/Menu';
import WorkerHistory from './pages/WorkerHistory';
import WorkerCalendar from './pages/WorkerCalendar';
import FindPw from './pages/FindPw';
import PwAuth from './components/findpw/PwAuth';
import PwReset from './components/findpw/PwReset';
import PwFinish from './components/findpw/PwFinish';
import SeniorInfo from './pages/SeniorInfo';
import Recruiting from './pages/Recruiting';
import EditCenterInfo from './pages/EditCenterInfo';
import EditManagerInfo from './pages/EditManagerInfo';
import EditCareWorkerInfo from './pages/EditCareWorkerInfo';
import SeniorSpecifics from './pages/SeniorSpecifics';
import CareWorkerSpecifics from './pages/CareWorkerSpecifics';
import RecruitingSpecifics from './pages/RecruitingSpecifics';
import Dashboard from './pages/Dashboard';
import DashMain from './components/dashboard/main/DashMain';
import DashStatus from './components/dashboard/status/DashStatus';
import DashMatching from './components/dashboard/matching/DashMatching';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home/:type" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupselect/:type" element={<SignUpSelect />} />
        <Route path="/signup/:type/:target" element={<SignUp />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route
          path="/contact/:seniorId/:workerId"
          element={<CareWorkerDetail />}
        />
        <Route path="/careworkerinfo/:order" element={<CareWorkerInfo />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/list/senior" element={<SeniorList />} />
        <Route path="/list/job" element={<JobList />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/history" element={<WorkerHistory />} />
        <Route path="/calendar" element={<WorkerCalendar />} />
        <Route path="/find-pw" element={<FindPw />}>
          <Route path="auth" element={<PwAuth />} />
          <Route path="reset" element={<PwReset />} />
          <Route path="finish" element={<PwFinish />} />
        </Route>
        <Route path="/seniorinfo/:type" element={<SeniorInfo />} />
        <Route path="/recruiting/:order" element={<Recruiting />} />
        <Route path="/editcenterinfo/:id" element={<EditCenterInfo />} />
        <Route path="/editmanagerinfo/:id" element={<EditManagerInfo />} />
        <Route
          path="/editcareworkerinfo/:id"
          element={<EditCareWorkerInfo />}
        />
        <Route path="/seniorspecifics/:id" element={<SeniorSpecifics />} />
        <Route
          path="/careworkerspecifics/:id"
          element={<CareWorkerSpecifics />}
        />
        <Route
          path="/recruitingspecifics/:id"
          element={<RecruitingSpecifics />}
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashMain />} />
          <Route path="status" element={<DashStatus />} />
          <Route path="matching" element={<DashMatching />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
