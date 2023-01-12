import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {GeneralManagerData} from '../Route/SubLinkJSON';



function Generalmanage() {
const [subLinkJSON,setSubLinkJSON]=useState(GeneralManagerData);
  return (
    <>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </>
  )
}

export default Generalmanage
