// import React,{useState} from 'react'
// import SubLink from '../../Route/SubLink';
// import {EmployeeManageData} from '../../Route/SubLinkJSON';
import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {EmployeeManageData} from '../../Route/SubLinkJSON';


function Employeemanage() {
const [subLinkJSON,setSubLinkJSON]=useState(EmployeeManageData);
  return (
    <>
     
      <SubLink sublinks={subLinkJSON} />
    </>
  )
}

export default Employeemanage
