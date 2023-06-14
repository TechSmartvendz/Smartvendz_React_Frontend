import React, { useState } from "react";
import MachineContext from "../../Context/MachineContext";
import Machine_details from "../Machine_details";
import Machine_manage from "../Machine_manage";
// import "./App.css"
// import AuthContext from '../Context/AuthContext';
function Manage_machine() {
  const [add1, setAdd1] = useState(!false);

  return (
    <React.Fragment>
   
      <MachineContext.Provider value={{ add1, setAdd1 }}>
        {add1 ? <Machine_manage /> : <Machine_details />}
      </MachineContext.Provider>
    </React.Fragment>
  );
}
export default Manage_machine;
