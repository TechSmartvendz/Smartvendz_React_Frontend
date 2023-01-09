import React, { useState } from "react";
import {Link, Outlet } from "react-router-dom";
import '../components/Usermanage/UserManage.css'
function SubLink(props) {
  const [Sublinks,setSubLinks]=useState(props.sublinks)
  return (
    <div>
   
 
      {Sublinks.map((item, index) => {
        return (
        
          <Link key={index} to={item.path}>
          <button className="user_btn" key={index}>
           {item.title}
          </button>
        </Link> 
      
      
        );
      })}
    
    
      <Outlet/>
    </div>
  );
}

export default SubLink