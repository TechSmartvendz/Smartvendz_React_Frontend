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
    { sideBarData.map((item, index) => {
      if(navData[item.permission]){
      return (
        <li key={index} className={item.cName} id='visible'>
          <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
          <ul id="hidden" className="nav-menu-items ulbg">
        {item.submenu && item.submenu.map((type, index) => {
          if(navData[type.permission]){
          return <li key={index} className={item.cName} ><Link  to={type.path}>{item.icon}<span>{type.title}</span></Link> </li>
          }
        })}
       </ul>
        </li> 
      );
    }})
  
  }
    </React.Fragment>
  );
}

export default SubMenu;


// <React.Fragment>
// <li key={index} className={item.cName}>
// <Link to={type.path}>
//   {item.icon}
//   <span>{type.title}</span>
// </Link>{" "}
// </li>
// </React.Fragment>

