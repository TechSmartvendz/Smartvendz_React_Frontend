import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {MachineManageData} from '../../Route/SubLinkJSON';



function MachineManage() {
const [subLinkJSON,setSubLinkJSON]=useState(MachineManageData);
  return (
  <React.Fragment>
      <SubLink sublinks={subLinkJSON} />
      </React.Fragment>
  )
}

export default MachineManage