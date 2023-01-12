import React,{useState} from 'react'
import SubLink from '../Route/SubLink';
import {RefundandSupportData} from '../Route/SubLinkJSON';

function Refund() {
const [subLinkJSON,setSubLinkJSON]=useState(RefundandSupportData);
  return (
    <>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </>
  )
}

export default Refund
