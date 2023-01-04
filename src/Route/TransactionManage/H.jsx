import React from "react";
import {Link, Outlet } from "react-router-dom";
import TransactionManageData  from "./TransactionManageData";

function H() {
  return (
    <div>
    <div>
  
      {TransactionManageData.map((item, index) => {
        return (
          <ul>
            <li key={index}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          </ul>
        );
      })}
  
    </div>

      <Outlet />
    </div>
  );
}

export default H;