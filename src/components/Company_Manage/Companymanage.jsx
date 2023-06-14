import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {CompanyManagerData} from '../../Route/SubLinkJSON';



function Companymanage() {
const [subLinkJSON,setSubLinkJSON]=useState(CompanyManagerData);
  return (
    <>
      <SubLink sublinks={subLinkJSON} />
    </>
  )
}

export default Companymanage
