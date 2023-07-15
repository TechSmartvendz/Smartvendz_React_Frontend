import React from 'react'
import SubLink from '../../Route/SubLink';
import {SupplierData} from '../../Route/SubLinkJSON';
function SupplieManage() {
    const [subLinkJSON,setSubLinkJSON]=useState(SupplierData);
  return (
    <div>
       <SubLink sublinks={subLinkJSON} />
    </div>
  )
}

export default SupplieManage
