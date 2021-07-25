import './App.css';
import {Link} from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchField from "react-search-field";
import logo from './Sadbhavna.png'
import hospital from './hospital.pdf'

import './soochna.css'

import MyGov from './Remedy.pdf'


import NotificationsIcon from '@material-ui/icons/Notifications';

import {MenuItem,FormControl,Select} from "@material-ui/core"
import {useState,useEffect} from 'react'
import InfoBox from './InfoBox';

import Table from './Table'
import {Button,Card,CardContent} from '@material-ui/core'
import { Document, Page,pdfjs } from 'react-pdf'
import {sortData} from './util'
import LineGraph from './LineGraph'
import ReactPlayer from 'react-player';
import Footer from './Footer.js'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Soochna() {
const [countries,setCountries]=useState([]);
const [country,setCountry]=useState('worldwide');
const [countryInfo,setCountryInfo]=useState({});
const [tableData,setTableData]=useState([]);

const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

useEffect(()=>{
  fetch('https://disease.sh/v3/covid-19/all')
  .then(response => response.json())
  .then(data =>{
    setCountryInfo(data);
  });
},[]);
useEffect(() => {

  const getCountriesData= async()=>{
    await fetch ("https://disease.sh/v3/covid-19/countries")
    .then((response)=> response.json())
    .then((data)=>{
const countries = data.map((country)=>(
  {
    name:country.country,
    value: country.countryInfo.iso3
  }
));

const sortedData= sortData(data);
setTableData(sortedData);
setCountries(countries);


    });

  };
  getCountriesData();
}, [countries]);

const onCountryChange = async (event)=> {
const countryCode=event.target.value;
setCountry(countryCode);

const url= countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
await fetch(url)
.then(response => response.json())
.then(data =>{
  setCountry(countryCode);
 setCountryInfo(data);

})

};

console.log("COUNTRY INFO >>>",countryInfo);


  return (
      <>

    <div>
        <div class="app_header">

<img class="logo" src={logo} alt="logo"/>
        <Button component={Link} to="/Soochna" variant="contained" color="primary">
  Soochna
</Button>
<Button component={Link} to="/Sahayog" variant="contained" color="secondary">
  Sahayog
</Button>

<Button component={Link} to="/Dhyan" variant="contained" color="secondary">

  Dhyan
</Button>
<SearchField
  placeholder="Search..."
  //onChange={onChange}
  searchText="This is initial search text"
  classNames="test-class"
/>
<NotificationsIcon></NotificationsIcon>
<AccountCircleIcon ></AccountCircleIcon>
 </div>
  </div>


      <Card className="info">

           <Card>
             <br/>

               <br/>
               <br/>
           <img class="img"src="https://img.flaticon.com/icons/png/512/71/71036.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="tweets"/>
               <br/>
               <br/>
               <br/>
               <br/>

<h1>News and tweets </h1>
           </Card>
           <Card>
           <br/>

<br/>
<br/>
           <img class="img"src=" data:image/png;base64,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" alt="beds"/>
               <br/>
               <br/>
               <br/>
               <br/>

<h1>Oxygen Cylinders and Beds </h1>
           </Card>
           <Card>
           <br/>

<br/>
<br/>
                <img class="img"src="https://image.flaticon.com/icons/png/512/2557/2557144.png " alt="precautions"/>


              <br/>
               <br/>
               <br/>
               <br/>

<h1>Precautions</h1>
           </Card >




           </Card>



<br/>
<br/>
<br/>
<Card className="info">
<div class="update">
        <h2>About</h2>
      <p><strong>Soochna : </strong>Soochna is made to provide you all information , updates and help related to covid -19 , this will aim to provide regular updates , information related to hospital beds , oxygen cylinder and other requirements in this situation .<br/><br/></p>
      <Button  variant="contained" color="secondary">

Learn more
</Button>
</div>
</Card>


<br/>
<br/>
<br/>
<h2>Find All Facilities On </h2>
<a href="https://www.covidindiaresources.com/">
<h2 className="heady">CovidResources.in</h2>
</a>
<br/>
<br/>
<Card className="info">
<a href=" https://www.covidindiaresources.com/search">
  <Card className="temp1">

    <img src="https://static.thenounproject.com/png/1814863-200.png" alt="oxygen"/>

    <h4>Click here</h4>

  </Card>

  </a>
  <a href="https://www.covidindiaresources.com/search ">
  <Card className="temp">

    <img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8aGhoAAAAXFxd/f38GBgYRERHHx8fLy8uurq4ODg4ZGRkWFhbQ0ND8/Pz39/cnJydHR0cfHx/y8vLs7Ow7OzuqqqpAQEC5ubnf398qKipdXV1OTk5qamqRkZGjo6OZmZl1dXXk5OQxMTGGhoa9vb3Z2dlwcHBhYWFVVVV9qUhGAAAEt0lEQVR4nO2c2VrqMBRGm9RWaEKBMiNHJkF9/xc8TcUBSFMaMvF9/7rwpqh7kWlnahQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIhrx/ie+IDDNdDi4ohsfcd1QG2dGU8/icZOY7KpN0KBEw8gtj1HdUJjkZnsEy31GZBIaPz02GeX7584G4sQx7m5fJYLBfvT0/3GjZZFiVWHdGaZbymGeUDl4fzLGxDPOot6fp70NOaddbtDo019L1Xz9SDZf/HqktNhjm0SuNL54SRl8eqL9RGpYeU8nzUvGf16BboTaMjvQsoftVXHuNug0NZThMSSEzjLOd17BboG6Hc1kdrT6SbE8jSfCoDWfp9dPvejryGXYLlIYLKmuE1UfI16iYH6ZdKxx64yqE++uJ0nBaa0hIVnWnr9QekyeRIt6tqDTcJvWGfJmX/32YxrWfuA/GyhxxsLm/LSgNP2uboWiIIj8t+9r6L+EOvW9JSqeiGO8pSKXhhCuioOMvQ7swulrcN2ML3bBs8OnBXhmqa+nIiaGoqqLb1pZU9zSZuqdxUoanHNGO4Vo9WuSuDMXga8fwqBrxq+/ViSEpK+pRV7Aha6vvauKvrM2NYdkmmPbaiWbmTZKvGaIrw4K+2zHMa1JvxujOqWE5OB1sGOZRT1qIZSvcRI4N04lmX9O0irGRKRb05dS3uTMkIn8zbih4KvvTix61SIbf7d6hIV9aMiwnSOzMkJUl+FNhHBrqtsTGNe886hT0z6DBknIk/EmFXRqmKyuGleVmT5M0ZiwuZzPp0/jPI5eGov/W6G1u25npd96GAxIPJtv5+OyBS0ORRtkyrCplfzQ6ba/9+TcODRlJPw0b3jLvnKlmkMYdk3FzRC0Mhd9irlwQm79xG2sYtdBno4ZRdJg1LYdlLv3ITyZlxDCP8nfqshu5hUxnQ6jGsGyDW8X01xN8YtCwJuf2S1xozBJrDbeJe4MmeKrRmdb2NPWbMv6IqcaeXm1Ps3c50t0KXRg0XKZxeOgsSNUaTpI0PIwatv9TgYKTe4+PzDAO2LB965EaphZCM0XrvUSZIUmfQmXbfiFD2g5JEiq0Y8QwYGivpR8MgwOGMAwfGMIwfGAIw/CBIQzDB4YwlMAYc7nJxghRHo03b8gyixcqavaVVd+paUNOi4/1/Nkl881Hodh7NmsY09ncx+Wm/nwmDmFJC9KoYcY93ffNo6grzkDIFE0aJpOFp8v34orMbiaPy6BhOvF7+24kP21lzpCzsee3J4xiq7WU0Y6FoNvRk512MWXIknffW6RlBXqX3A00VoZ04d1Q3GAlV5cbTRmmq8j7yy/KQvy8PjZnyjCQ2/aStx0YMmR33DIyydGaYUx1TqqaZ3Tdm5oyTMI4a9K/nmSYqqWBnFToX6emhgx5KIaFrdEilDLMi6vTgzCUAEOfwPA2wja0lnknFsLVwN5oEWeB5DT8upa2P/W1o5zzmJ9BQ3kH7YpeRMZ1Mubu/uo9wiuNE/FWWAwHZ285Xu61Fjhl74IOopaKlbCLyHTikv5O7n2GXyEUz+ML4psHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDb+A+Xw2w9wLWkKAAAAABJRU5ErkJggg==" alt="beds"/>
    <h4>Click here</h4>

  </Card>
  </a>
  <a href="https://www.covidindiaresources.com/search ">
  <Card className="temp">

    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAACenp4vLy/19fXo6OjBwcGlpaUXFxfu7u7IyMhKSko+Pj6QkJDg4OD8/Px0dHSWlpZ8fHzOzs5ZWVnV1dWpqam/v79UVFRDQ0Pd3d0nJydPT0/k5OSzs7NsbGxjY2OIiIgiIiI4ODgSEhJnZ2dxcXEUFBSKiopwIhBcAAAH0UlEQVR4nO2d63qqOhCGxYoKnoqKVqyore3y/q9wd68gTMjkAMRFk2fenzJIvhBymCSTwYAgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiF/GKIz6TsIzSdfT4IfZZNV3Sp5D+BaUTPpOzDPYBJCvvpNjn2XA89p3gqxzrCkM8r5TZJm8LjD46DtJlpkLCoNN32myiygwWPSdJquEiMLvvhNlFUzhpe9EWQVT6E2TuPzhtEEUbsOfK5n73dQRos2v+kanMOk7gZ0hhe6X0lWs5tR3AgmCeAqjeDJ0gt0+a6Mve9dU37+L7b6pwEXfSW7MMW4k8N53etuwbiBw3Hdi29HAL3frO60tuXv+CgNzr9W674S25mioEHHpucLOTOFL3+lsz9RhhSNViqu5ALNW8VcqVLqiJqXZxVOFI0M7dxUOvks7I4eOgwrTytBThSDNJqMMFxXuSsN3TxWuKksDt5yLCkFX89qXwhnKu+nDdAqzylS/DOc5CiUP2+nvNFIIetP6xQ3PUSjpdk30d5oprBY5fHqqENQ1Wt+bmwoH19JW685wVOFJ+yzXFQ5mpbFuxZ+rCvelsW4g7KpCsN5I45JyVmHlqb94qjAyNXdW4aBaXqweCLurMK7sPVU4mJb2Y08VJqX9m6cKgdMt9FPh4Ku8QTUQdlkhWN3oqULg4FcMhJ1WWP3fwVOFoK6RD4SdVggc/PKlC24rBA5+6UD4nyoc2lYIki+dEe6m8BqFKJKHjXDr+g6vBgor/6R0Wr+bQjureYU1w+YKgdNNNhB2XCFw8Mv2ariuMNPe9SsV6hyEkEN519AhhdMmVLc5pLAlydJ3hcH/zZfvChG3lHcKhbl9/xQGF+8V1uZqfFTIt6deKuQGi14q5F6inwrhl+inwhfvFUInuKcKQTH1VCGYq/FUIVjv5qvCymvTTaGdnfMr/YMaUw34uyk8x2MUyZrI5R613usf1JitJYUyOnqEbdCPQlOvvg1C7xWOvVc48V7ht/cKZ94rDPxXGHmvcOO9won3Cq/eKzx4r/DmvcJHZeqxwrShwj+XJM9O0ShapvniTWNsU+HnehJn4WgUZvFk/dngxryRwmvKp3UVv6rMrSk87GpTntHEOM7F1VzhHN1QvNrJA79YUrhGN8EulZlbcTFVeJTvSRFjHRdYUfgqXXQSnU3uvxkqVDqbRt/4TRYUfqT4fzA2fwz+YmWi8EO3gRH3InVXqA0EZfAaMwOFW/if6e5+eZttz0kOP4/w4xkKuVXNUZoPF4thnkbN/myvVwgycvzFXblXS1dWSA0uyXfTnc4BKKHZFawJml5BmYrl9zMSrcIq9nQuBIgPtqXGlfgfcxzxX3Cqum0stA2HKiqNLsbVl05hWUSXeBNUvmHbXvnSTbY8YJdn5UcircsZLxqFZZB7aYGfPopMJrNoRVl7Sx3I5XpgTRyvlVrhI6dU7eujxBh/YAaUE2MXuc35YaPuxYVKhY+pjS+ZwV8evR1dR7UBj3pYGa7yUhidVEbsBcgUPmbCdfHcikoBC7DejkcJ3KrNHm9RGdZyp1K4MS1+RRtlK77k0TBny69VZbNWKDyYFAJoaas+LYq9QbDDVFMPBsUiPonCogqZ4Vc5iu7H1cBUT1GBm8yZHvWmU7nC4kG1Tucx2URRGF9rxsxW2DTRiiGeXet8PM7rBXenz1q5wqKQ8xer3bYJ93vhmLQSgTFCivxH2YvZ831g9qOqMZYrZE05dz7DDPamue+zeOE2JngPSA6ewXP5NjLX1TU3ec6zW2FbPx9wRNA61ealKUUhha+qNoyCaSpWA8ur3Tfp5bOYOfXxNny/d11eGsPaKLAjrZ6z/CthxUreO/37saFDkInwIDFECujrFJGMLMTMZkmG5V3w1MAajTUt8iaN3Yz17NinDVt7QSCnX1daTCkaANCdQQ4PAp8i86ZJm+JXMU8esHUMV8GWA9izoWJ3f++78M+IFww0YcX4TjLsLJdgIifaRPXMwrYvAicUS4dmtGaA+P0jS49AJVcE38Fry211byQMH5hCMF7Aor2CPi/7HrqHlWZlEpY65LkD4TLW83rnk7wac+H5E/bBg5oDc5mC+oA1TFHS9VyAff0loQpv9ct74XyBjdnuN1BKMae38A5tAXua2HXN5QaAuhELgA5qPMtH3gEJiNsbDEVv4tVGgGL4Il6FOa0KLdIC0KVBSgeo0Gbi1UbAzoDoYle3lp0ANR8SeQb435qckIAB6zQht+Ar3GJ3dwA2rELWwsat86mesLtT32QLpw1sn3ML+/DCNns4pdf5CDquk8I3+lwPzfpZd3BIVyun0Efc9TOsd/hAoY8456HtQlobas5BBobccNbC0bN8X/pWzDhnV+5npBbqSs33Miza74j3Ldio4AQv6Mv2/F6fTTOJON2UWh4Gs0WS3OuTGFY+/1qmoVhuDP/SwNfWFf3qDkkkg45o5watfRxab739aoZh7PPuTKp+juBGsYZmrsfiKeXK8jLXBwxvjdLffrH5JIWX8FlFlKFYbWH5nPmRLDdt99bqSH3M9k+ZRz0w2+cfTIzP4z/nwcJijDf7PRmMWNA4f9oJ81lSPewy+XcHS58S4Er7vLc64NGYVbiJx3HaJMaRFaJNPrzfh3tD/xJBEARBEARBEARBEARBEARBEARBEATCf00jiGAJzP35AAAAAElFTkSuQmCC" alt="Ambulance"/>
    <h4>Click here</h4>

  </Card>
  </a>
  <a href="https://www.covidindiaresources.com/search">
  <Card className="temp">

    <img src="data:image/png;base64,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" alt="medicine"/>
    <h4>Click here</h4>

  </Card>
  </a>


</Card>
<br/>
<br/>
<br/>



    <div className="app">

      <div className="app_left">
    <div className="app_header">
   <h1> Tracker </h1>

<FormControl className="app__dropdown">
  <Select
  variant="outlined"
  onChange={onCountryChange}
  value={country}

  >
    <MenuItem value ="worldwide" >Worldwide </MenuItem>
   {
     countries.map((country)=>(
       <MenuItem value ={country.value} >{country.name} </MenuItem>
     ))
   }

  </Select>

</FormControl>

   </div>
   <div className="app_stats">
<InfoBox  title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
<InfoBox  title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
<InfoBox  title=" Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
   </div>
   <div className="player">
  <ReactPlayer url="https://www.youtube.com/watch?v=s1w1wE5Kd0w" playing={true}/>

  </div>
  <br/>
<h2>Tweets and NEWS</h2>
<br/>
  <div>
  <TwitterTimelineEmbed
  sourceType="profile"
  screenName="SetuAarogya"
  options={{height: 1000 }}
/>
  </div>

  {/* hospital beds */ }





    <div className="pdf">
  <br/>
  <br/>
  <h2>Hospital beds</h2>
  <br/>
  <br/>
      <Document
        file={hospital}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <p>Page {pageNumber} of {numPages}</p>
    </div>





















    <div>
    <br/>
    <br/>
<Footer/>
</div>
  </div>

<Card className="app_right">
  <CardContent>
<h2> The number of patients </h2>
<Table countries={tableData}/>
<LineGraph/>
  </CardContent>

  <div className="inform">
  <h2 className="head"> 3 Things to remember</h2>
    <div className="things">

<p className="head"> 1. Go get vaccinated</p>
<img className="image" src="https://image.freepik.com/free-vector/cartoon-coronavirus-vaccine-background_23-2148871017.jpg" alt="vaccine"></img>
</div>
<br/>
<div className="things">
  <p className="head"> 2.Wear mask outside the home </p>
  <img className="image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/masks/322538_young_man_mask_fitter.jpg" alt="mask"></img>
</div>
<br/>
<div className="things">
<p className="head"> 3. Wash your hands</p>
  <img className="image" src="https://creakyjoints.org/wp-content/uploads/2020/03/0320_Handwash_Infographic-1024x683.jpg" alt="wash hands"></img>
</div>
  </div>


{/* trying */}



<div className="pdf2">
  <br/>
  <br/>
  <h2>Government Documents </h2>
  <br/>
  <br/>
      <Document
        file={MyGov}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <p>Page {pageNumber} of {numPages}</p>
    </div>















</Card>





  </div>


  </>
  );
}

export default Soochna;