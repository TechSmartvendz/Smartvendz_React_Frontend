import React from "react";
import  RefundandSupportData  from "./RefundandSupport";
import {Link, Outlet } from "react-router-dom";


function G() {
  return (
    <div>
    <div>
    
      {RefundandSupportData.map((item) => {
        return (
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
         
        )
      })}
    
    
    </div>

      <Outlet />
    </div>
  );
}

export default G