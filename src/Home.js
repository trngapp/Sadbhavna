import React from 'react'
import './App.css'
import {Button} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchField from "react-search-field";
import {Link} from "react-router-dom"
import ReactPlayer from 'react-player';
import Footer from'./Footer'
import logo from './Sadbhavna.png'
import NotificationsIcon from '@material-ui/icons/Notifications';


function Home() {
    return (
        <>

        <div class="app_header">

<img  className="logo" src={logo} alt="logo"/>

  <Button component={Link} to="/Soochna" variant="contained" color="secondary">
  Soochna
</Button>
<Button component={Link} to="/Sahayog" variant="contained" color="secondary">
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
<NotificationsIcon></NotificationsIcon>
<AccountCircleIcon ></AccountCircleIcon>






        </div>
        <div class="update">
      <img class="slider" src="https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5?68" alt="error"></img>
        </div>



        <div class="update">
        <h2>About</h2>
      <p>This is a website made to provide information and help for the unfortunate situation of covid-19 pandemic in our Country , This website has 3 (THREE) Components to help the citzens of our nation<br/> <br/> 1.<strong>Soochna : </strong>Soochna is made to provide you all information , updates and help related to covid -19 , this will aim to provide regular updates , information related to hospital beds , oxygen cylinder and other requirements in this situation .<br/><br/> 2. <strong>Dhyan:</strong> Dhyan is made for those people who are suffering from mental health issues during this lockdown in india , the sucidal rate has increased in last 2 years , therefore this website will provide consultation from psycologists and psycatrist all around the country ,and will give provide information and emergency help for sick people .<br/> <br/> 3.<strong> Sahayog: </strong>Sahayog is made for those people who have lost their jobs in this time of covid-19 , specially thos who were working in the lower sector and were the only bread earner of their family, this website will provide them a platform to contact people who wants to hire them , this will make shure that people who applies on our site must be proper vaccinated and should take all preventive measures.<br/><br/></p>
      <Button  variant="contained" color="secondary">

Learn more
</Button>

        </div>
        <div class="playerh">
  <ReactPlayer url="https://www.youtube.com/watch?v=AXvZJETnEj0"/>
  <br/>
  <br/>
  <br/>
  <br/>
  <h2>Team</h2>

  </div>

<div class="regularcard">
  <div class="card">
  <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHXLHxtIJ4i6A/profile-displayphoto-shrink_200_200/0/1621792955065?e=1632355200&v=beta&t=nV-4rqGLvSlKiO9AUhJbAC6_I-skqxHoHiUsbf4TTuI" alt="John"/>
  <h1>Tarang Sharma</h1>
  <p class="title">CEO & Founder</p>
  <p>UIET,CSJMU</p>

  <p><button class="butt">Contact</button></p>
</div>
</div>

<div>
    <br/>
    <br/>
<Footer/>
</div>




        </>
    )
}

export default Home
