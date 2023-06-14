import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {TransactionManageData} from '../../Route/SubLinkJSON';

function Transactions() {
const [subLinkJSON,setSubLinkJSON]=useState(TransactionManageData);
  return (
      <>
      <SubLink sublinks={subLinkJSON} />
      </>
  )
}

export default Transactions
