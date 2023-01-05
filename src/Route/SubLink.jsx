import React, { useState } from "react";
import {Link, Outlet } from "react-router-dom";

function SubLink(props) {
  const [Sublinks,setSubLinks]=useState(props.sublinks)
  return (
    <div>
    <div>
    <ul>
      {Sublinks.map((item, index) => {
        return (
          <Link key={index} to={item.path}>
          <button key={index}>
           {item.title}
          </button>
        </Link> 
        );
      })}
    </ul>
    </div>
      <Outlet/>
    </div>
  );
}

export default SubLink