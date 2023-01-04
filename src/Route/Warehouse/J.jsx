import React from "react";
import WareHouseData  from "./WareHouseData";
import {Link, Outlet } from "react-router-dom";


function J() {
  return (
    <ul>
      {WareHouseData.map((item, index) => {
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
  );
}

export default J