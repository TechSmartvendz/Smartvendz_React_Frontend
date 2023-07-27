import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function SubMenu(props) {
  const [navData, setNavData] = useState(props.navData);
  const [sideBarData, setSideBarData] = useState(props.sideBarData);
  const [item, setItem] = useState(props.item);
  const [key, setKey] = useState(props.key);
  // console.log("item:", item);
  const [subnav, setSubnav] = useState(false);
//  console.log('navDataITEm:',navData)
  const showSubnav = () => setSubnav(!subnav);

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      {
        <li
          key={key}
          className={item.cName}
          id="visible"
          onClick={item.submenu && showSubnav}
        >
          <Link to={item.path}>
            <div>
              {" "}
              {item.icon}
              <span>{item.title}</span>
            </div>
            <div>
              {item.submenu && subnav
                ? item.iconOpened
                : item.submenu
                ? item.iconClosed
                : null}
            </div>
          </Link>
          <ul key={key} className="nav-menu-items ulbg">
            {subnav &&
              item.submenu.map((type, index) => {
               if(type.permission){

               return (
                    <li key={index} className={type.cName}>
                      <Link to={type.path}>
                        {type.icon}
                        <span>{type.title}</span>
                      </Link>{" "}
                    </li>
                  );
                }
              })}
          </ul>
        </li>
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
