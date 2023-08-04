import React, { useState, useContext, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.jsx";
import SubMenu from "./SubMenu";
import "./Navbar.css";

import NavContext from "../Context/NavContext";
import axios from "axios";
import { Cookies } from "react-cookie";

function Navbar() {
  const cookies = new Cookies();
  const token = cookies.get("JWTcookie");
  const { sidebar, setSidebar } = useContext(NavContext);
  const [navData, setNavData] = useState({});
  const [userRole, setUserRole] = useState("");
  const [sideBarData, setSideBarData] = useState(SidebarData);
  const [searchQuery, setSearchQuery] = useState("");

  // console.log("sideBarData:", sideBarData);

  // console.log("navData:", navData);
  const [navbar, setNavbar] = useState(false);

  // const showSidebar = () => setNavbar(!navbar);
  const loadDate = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/Permission/LoadMenu",
        { headers: { Authorization: "Bearer " + token } }
      );

      setUserRole(response.data.data.role);
      setNavData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDate();
  }, []);
  const userName = localStorage.getItem("username");
  // console.log(':navData',navData);
  return (
    <React.Fragment>
      <nav className={sidebar && "nav-menu active"}>

        <ul className="nav-menu-items">
          <li>
            {/* <li className="nav-li"></li> */}
            {/* <div className="line-div"></div> */}
         
            <div className="userinfo-container" >
              <h4>Welcome</h4>

              <h3>
                {userRole.toUpperCase()}

                <p style={{ color: "grey" }}>{`(${userName})`}</p>
              </h3>
            </div>
        
            <hr style={{ borderColor: "grey" }}></hr>
            {/* <input type="text" id="mySearch" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search..."  /> */}

            {/* <Link>
              <FaIcons.FaBars onClick={showSidebar} />
              <FaIcons.FaBars onClick={showSidebar} />
            </Link> */}

            {/* <div>
            <Link>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div> */}
            {navData.data
              ? sideBarData.map((item, index) => {
                  if (navData.data[item.permission]) {
                    return (
                      <SubMenu
                        item={item}
                        key={index}
                        indexValue={index}
                        navData={navData.data}
                      />
                    );
                  }
                })
              : () => {
                  setSidebar(false);
                }}
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
