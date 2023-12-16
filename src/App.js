// import React, {useEffect, useState} from "react";
// import axios from "axios";
import AppSideNavigation from "./components/SideNavigation";
import { Route } from 'react-router-dom';


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
      <AppSideNavigation >
        {/* Define your routes here */}
        <Route path="/menu1" render={() => <div>Content for menu1</div>} />
        <Route path="/menu2" render={() => <div>Content for menu2</div>} />
        <Route path="/menu3" render={() => <div>Content for menu3</div>} />
      </AppSideNavigation>
    </div>
  );
}

export default App;
