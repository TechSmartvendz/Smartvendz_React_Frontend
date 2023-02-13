import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function SubMenu(props) {
 

  const [navData, setNavData] = useState(props.navData);

  const [sideBarData, setSideBarData] = useState(props.sideBarData);



  useEffect(() => {
   
  }, []);
  return (
    <React.Fragment>
    <li key={index} className={item.cName}>
    <Link to={type.path}>
      {item.icon}
      <span>{type.title}</span>
    </Link>{" "}
  </li>
    </React.Fragment>
  );
}

export default SubMenu;
