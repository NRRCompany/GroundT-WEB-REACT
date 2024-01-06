import {Route, Routes} from 'react-router-dom';
import React from "react";
import Home from "./pages/main/main.jsx"
import Login from "./pages/login/login.jsx"
import FindPassword from "./pages/login/findPassword";
import SettingPassword from "./pages/login/settingPassword";
import AttendanceManagement from "./pages/attendanceManagement/attendanceManagement";
import EmployeeManagement from "./pages/admin/employeeManagement";
import EmployeeAdd from "./pages/admin/employeeAdd";
import EmployeeCommute from "./pages/admin/employeeCommute";



function App() {

  return (
    <div className="contents">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findPassword" element={<FindPassword />} />
            <Route path="/settingPassword" element={<SettingPassword />} />
            <Route path="/attendanceManagement" element={<AttendanceManagement />} />
            <Route path="/employeeManagement" element={<EmployeeManagement />} />
            <Route path="/employeeAdd" element={<EmployeeAdd />} />
            <Route path="/employeeCommute" element={<EmployeeCommute />} />
        </Routes>
    </div>
  );
}

export default App;
