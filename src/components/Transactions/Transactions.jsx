import React,{useState} from 'react'
import SubLink from '../../Route/SubLink';
import {TransactionManageData} from '../../Route/SubLinkJSON';

function Transactions() {
const [subLinkJSON,setSubLinkJSON]=useState(TransactionManageData);
  return (
    <div>
      <p>Transactions</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default Transactions
