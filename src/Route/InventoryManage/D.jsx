import React from "react";
import InventoryManagerData  from "./InventoryManage";
import {Link, Outlet } from "react-router-dom";


function D() {
  return (
    <div>
      <div>
    <ul>
      {InventoryManagerData.map((item, index) => {
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


export default D