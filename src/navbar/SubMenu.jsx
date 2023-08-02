import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function SubMenu(props) {
  
  const [item, setItem] = useState(props.item);

  const [indexValue, setIndexValue] = useState(props.indexValue);
  // console.log("item:", item);
  const [subnav, setSubnav] = useState(false);
  //  console.log('navDataITEm:',navData)
  const showSubnav = () => setSubnav(!subnav);

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      {
        <ul>
        <li
          key={indexValue}
          className={item.cName}
          id="visible"
          onClick={item.submenu && showSubnav}
        >
          <Link
            to={item.path}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <div style={{ display: "flex", gap: "23px", width: "200px" }}>
              {" "}
              {item.icon}
              <span>{item.title}</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.submenu && subnav
                ? item.iconOpened
                : item.submenu
                ? item.iconClosed
                : null}
            </div>
          </Link>

          <ul key={indexValue} className="nav-menu-items ulbg" >
            {subnav &&
              item.submenu.map((type, index) => {
                if (type.permission) {
                  return (
                    <li key={index} className={type.cName}  >
                      <Link to={type.path} >
                        {type.icon}
                        <span >{type.title}</span>
                      </Link>{" "}
                    </li>
                  );
                }
              })}
          </ul>
        </li>
        </ul>
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
