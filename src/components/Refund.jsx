import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {RefundandSupportData} from '../Route/SubLinkJSON';

function Refund() {
const [subLinkJSON,setSubLinkJSON]=useState(RefundandSupportData);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default Refund
