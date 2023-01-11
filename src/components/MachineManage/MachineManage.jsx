import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {MachineManageData} from '../../Route/SubLinkJSON';



function MachineManage() {
const [subLinkJSON,setSubLinkJSON]=useState(MachineManageData);
  return (
    <div>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default MachineManage