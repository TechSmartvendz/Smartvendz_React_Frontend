import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {MachineManageData} from '../../Route/SubLinkJSON';



function MachineManage() {
const [subLinkJSON,setSubLinkJSON]=useState(MachineManageData);
  return (
  <>
      <SubLink sublinks={subLinkJSON} />
      </>
  )
}

export default MachineManage