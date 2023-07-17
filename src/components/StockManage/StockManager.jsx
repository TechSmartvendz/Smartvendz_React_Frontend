import React,{useState} from 'react'
import {StockData} from '../../Route/SubLinkJSON';
import SubLink from '../../Route/SubLink';
function StockManager() {
    const [subLinkJSON,setSubLinkJSON]=useState(StockData);
  return (
    <div>
    <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default StockManager
