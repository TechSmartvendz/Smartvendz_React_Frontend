import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {GeneralManagerData} from '../Route/SubLinkJSON';



function Generalmanage() {
const [subLinkJSON,setSubLinkJSON]=useState(GeneralManagerData);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default Generalmanage
