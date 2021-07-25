import './App.css';
import {Route,Switch} from "react-router-dom"
import Home from './Home.js';

import Soochna from './Soochna.js';
import Sahayog from './Sahayog.js';
import Dhyan from './Dhyan.js';
function App() {
return(
<>
<Switch>
  <Route exact path='/' component={Home}>
  </Route>
  <Route exact path='/Soochna' component={Soochna}></Route>
  <Route exact path='/Sahayog' component={Sahayog}></Route>
  <Route exact path='/Dhyan' component={Dhyan}></Route>
</Switch>
</>
  );
}

export default App;
