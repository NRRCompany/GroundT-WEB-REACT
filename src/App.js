import {Route, Routes} from 'react-router-dom';
import Home from "./pages/main/main.jsx"
import Login from "./pages/login/login.jsx"


function App() {

  return (
    <div className="contents">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
