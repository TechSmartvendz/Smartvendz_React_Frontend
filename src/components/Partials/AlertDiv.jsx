import React, { useState } from "react";


function AlertDiv(props) {
console.log("🚀 ~ file: AlertDiv.jsx:5 ~ AlertDiv ~ props", props)

  return (
    <>
    <div className="add-user-container">
    <span>{props}</span>

    </div>
 
    </>
  );
}

export default AlertDiv