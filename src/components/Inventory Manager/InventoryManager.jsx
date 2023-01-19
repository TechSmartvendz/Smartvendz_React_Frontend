import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {InventoryManagerData} from '../../Route/SubLinkJSON';

function InventoryManager() {
const [subLinkJSON,setSubLinkJSON]=useState(InventoryManagerData);
  return (
    <>
      <p>Inventory Manager </p>
      <SubLink sublinks={subLinkJSON} />
    </>
  )
}

export default InventoryManager