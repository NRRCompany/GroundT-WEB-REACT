import './App.css';
// import React, {useEffect, useState} from "react";
// import axios from "axios";
import SideNavigation from "./layouts/SideNavigation";
import { Route} from 'react-router-dom';


function App() {

  // const [main, setMain] = useState('');
  //
  // useEffect(() => {
  //   axios.get('/')
  //       .then(response => setMain(response.data))
  //       .catch(error => console.log(error))
  // }, []);


  return (
    <div className="App">
      <SideNavigation >
        {/* Define your routes here */}
        <Route path="/menu1" render={() => <div>Content for menu1</div>} />
        <Route path="/menu2" render={() => <div>Content for menu2</div>} />
        <Route path="/menu3" render={() => <div>Content for menu3</div>} />
      </SideNavigation>
      <header className="App-header">
        <button type="button" className="btn">Base class</button>
      </header>
    </div>
  );
}

export default App;
