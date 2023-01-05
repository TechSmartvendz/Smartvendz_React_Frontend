import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {EmployeeManageData} from '../Route/SubLinkJSON';



function Employeemanage() {
const [subLinkJSON,setSubLinkJSON]=useState(EmployeeManageData);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default Employeemanage
