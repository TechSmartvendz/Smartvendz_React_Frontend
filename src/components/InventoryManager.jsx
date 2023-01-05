import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {InventoryManagerData} from '../Route/SubLinkJSON';

function InventoryManager() {
const [subLinkJSON,setSubLinkJSON]=useState(InventoryManagerData);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default InventoryManager