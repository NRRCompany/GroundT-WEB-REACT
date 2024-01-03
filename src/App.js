import {Route, Routes} from 'react-router-dom';
import React from "react";
import Home from "./pages/main/main.jsx"
import Login from "./pages/login/login.jsx"
import FindPassword from "./pages/login/findPassword";
import SettingPassword from "./pages/login/settingPassword";
import EmployeeManagement from "./pages/admin/employeeManagement";
import EmployeeAdd from "./pages/admin/employeeAdd";


function App() {

  return (
    <div className="contents">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findPassword" element={<FindPassword />} />
            <Route path="/settingPassword" element={<SettingPassword />} />
            <Route path="/employeeManagement" element={<EmployeeManagement />} />
            <Route path="/employeeAdd" element={<EmployeeAdd />} />
        </Routes>
    </div>
  );
}

export default App;
