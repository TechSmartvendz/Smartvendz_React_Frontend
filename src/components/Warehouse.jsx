import React, { useState } from "react";
import SubLink from '../Route/SubLink';
import {WareHouseData} from '../Route/SubLinkJSON';

function Warehouse() {
const [subLinkJSON,setSubLinkJSON]=useState(WareHouseData);
  return (
    <div>
      <p>Refiller</p>
      <SubLink sublinks={subLinkJSON} />
    </div>
  );
}

export default Warehouse;
