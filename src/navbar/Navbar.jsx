import React, { useState, useContext, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.jsx";
import "./Navbar.css";
import { IconContext } from "react-icons";
import {
  postReq,
  putReq,
  getReq,
} from "../components/middleware/AxiosApisCall";
import SubMenu from "./SubMenu";
import NavContext from "../Context/NavContext";

function Navbar() {
  const path = "Permission/LoadMenu/";

  const { sidebar, setSidebar } = useContext(NavContext);
  const [navData, setNavData] = useState();
  const [sideBarData, setSideBarData] = useState(SidebarData);

  const loadDate = async () => {
    console.log("loadData() start")
    const response = await getReq(`${path}`);
    if (response.data) {
     setNavData(response.data);
    } else {
      console.log(response.data);
      setNavData();
    }
   
  };

  useEffect(() => {
    loadDate();
   }, []);

  useEffect(() => {
   console.log("navData~"+navData)
  }, [navData]);

  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li>
            <Link to="#" className="navbar-icon crossbutton">
              <AiIcons.AiOutlineClose
                size={25}
                onClick={() => setSidebar(!sidebar)}
              />
            </Link>
          </li>
          <SubMenu key={navData} navData={navData} sideBarData={sideBarData}/>
      
        </ul>
      </nav>
      {/*  </NavContext.Provider>
   </IconContext.Provider> */}
    </>
  );
}

export default Navbar;
