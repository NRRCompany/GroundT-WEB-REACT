import {Route, Routes} from 'react-router-dom';
import Home from "./pages/main/main.jsx"
import Login from "./pages/login/login.jsx"
import FindPassword from "./pages/login/findPassword";
import SettingPassword from "./pages/login/settingPassword";
import AttendanceManagement from "./pages/attendanceManagement/attendanceManagement";


function App() {

  return (
    <div className="contents">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findPassword" element={<FindPassword />} />
            <Route path="/settingPassword" element={<SettingPassword />} />
            <Route path="/attendanceManagement" element={<AttendanceManagement />} />
        </Routes>
    </div>
  );
}

export default App;
