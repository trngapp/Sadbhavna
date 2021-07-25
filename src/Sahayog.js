import React from 'react'
import './App.css'
import {Button} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchField from "react-search-field";
import {Link} from "react-router-dom"
import logo from './Sadbhavna.png'
function Sahayog() {
    return (
        <>
        <div class="app_header">

<img class="logo" src={logo} alt="logo"/>
        <Button component={Link} to="/Soochna" variant="contained" color="secondary">
  Soochna
</Button>
<Button component={Link} to="/Sahayog" variant="contained" color="primary">
  Sahayog
</Button>

<Button component={Link} to="/Dhyan" variant="contained" color="secondary">

  Dhyan
</Button>
<SearchField
class="test"
  placeholder="Search..."
  //onChange={onChange}
  searchText="This is initial search text"
  classNames="test-class"
/>
<AccountCircleIcon ></AccountCircleIcon>
</div>
       <div>
  <div class="topleft">

  </div>
  <div className="middle">
    <h1>COMING SOON</h1>

  </div>
  <div className="bottomleft">
    <p>Some text</p>
  </div>
</div>
        </>
    );
}

export default Sahayog
