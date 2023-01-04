import React from "react";
import EmployeeManageData  from "./EmployeeManageData";
import {Link, Outlet } from "react-router-dom";


function B() {
  return (
    <div>
      <div>
    <ul>
      {EmployeeManageData.map((item, index) => {
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

export default B