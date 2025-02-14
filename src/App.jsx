import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpSelect from './pages/SignUpSelect';
import Contact from './pages/Contact';

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
        </Routes>
    </>
  );
}

export default App;
