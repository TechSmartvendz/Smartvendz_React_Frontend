import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {MachineManageData} from '../Route/SubLinkJSON';



function Addnewmachine() {
const [subLinkJSON,setSubLinkJSON]=useState(MachineManageData);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default Addnewmachine
