import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {HomeData} from '../Route/SubLinkJSON';

function Home() {
const [subLinkJSON,setSubLinkJSON]=useState(HomeData);
  return (
   <>
 
    <SubLink sublinks={subLinkJSON} />
      
   </>
  )
}

export default Home;
