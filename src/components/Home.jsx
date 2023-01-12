import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {HomeData} from '../Route/SubLinkJSON';

function Home() {
const [subLinkJSON,setSubLinkJSON]=useState(HomeData);
const homeStyle={
  backgroundImage:"url('https://www.vendtrade.co.uk/wp-content/uploads/2015/07/Vending-Solution-Background.jpg')",
  height:'100vh',
  marginTop:'-70',
  fontSize:'50px',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
 
}


  return (
   <React.Fragment>

    <div style={homeStyle}>
   
    </div>
    </React.Fragment>
  )
}

export default Home;
