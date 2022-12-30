import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.jsx";
import "./Navbar.css";
import { IconContext } from "react-icons";
import NavContext from "../Context/NavContext";

function Navbar() {
  const { sidebar, setSidebar } = useContext(NavContext);

  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
        <ul className="nav-menu-items" >
       
       <li>
            <Link to="#" className="navbar-icon crossbutton">
              <AiIcons.AiOutlineClose size={25} onClick={() => setSidebar(!sidebar)}/>
            </Link>
          </li> 
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
        {/*  </NavContext.Provider>
   </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
 