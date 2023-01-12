import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {MachineManageData} from '../../Route/SubLinkJSON';



function Addnewmachine() {
const [subLinkJSON,setSubLinkJSON]=useState(MachineManageData);
  return (
    <>
      <SubLink sublinks={subLinkJSON} />
    </>
  )
}

export default Addnewmachine
