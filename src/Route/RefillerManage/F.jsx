import React from "react";
import RefillerManageData  from "./RefillerManage";
import {Link, Outlet } from "react-router-dom";


function F() {
  return (
    <div>
      <div>
    <ul>
      {RefillerManageData.map((item, index) => {
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
export default F
