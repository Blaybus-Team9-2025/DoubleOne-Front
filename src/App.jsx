import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpSelect from './pages/SignUpSelect';
import Contact from './pages/Contact';
import CareWorkerDetail from './pages/CareWorkerDetail';
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupselect/:type" element={<SignUpSelect />} />
        <Route path="/signup/:type/:target" element={<SignUp />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route
          path="/contact/:seniorId/:workerId"
          element={<CareWorkerDetail />}
        />
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
      </Routes>
    </>
  );
}

export default App;
