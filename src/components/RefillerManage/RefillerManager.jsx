import React, { useState } from "react";
import SubLink from '../../Route/SubLink';
import { RefillersManager } from "../../Route/SubLinkJSON";

const RefillerManager = () => {
  const [subLinkJSON, setSubLinkJSON] = useState(RefillersManager);

  return (
    <React.Fragment>
      <SubLink sublinks={subLinkJSON} />
    </React.Fragment>
  );

}

export default RefillerManager;
