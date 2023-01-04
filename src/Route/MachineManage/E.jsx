import React from "react";
import  MachineManageData from "./MachineManageData";
import {Link, Outlet } from "react-router-dom";


function E() {
  return (
    <div>
      <div>
    <ul>
      {MachineManageData.map((item, index) => {
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
    </ul>
    </div>
    <Outlet />

    </div>
  );
}

export default E