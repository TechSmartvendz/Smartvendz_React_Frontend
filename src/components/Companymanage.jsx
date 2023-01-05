import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {CompanyManagerData} from '../Route/SubLinkJSON';



function Companymanage() {
const [subLinkJSON,setSubLinkJSON]=useState(CompanyManagerData);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default Companymanage
