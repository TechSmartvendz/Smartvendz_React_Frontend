import React from "react";
import GeneralManagerData  from "./GeneralManagerData";
import {Link, Outlet } from "react-router-dom";


function C() {
  return (
    <div>
    <div>
    <ul>
      {GeneralManagerData.map((item, index) => {
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

export default C