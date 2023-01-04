import React from "react";
import  CompanyManagerData  from "./CompanyManagerData";
import {Link, Outlet } from "react-router-dom";


function A() {
  return (
    <div>
    <div>
    
    <ul>
      {CompanyManagerData.map((item, index) => {
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

export default A