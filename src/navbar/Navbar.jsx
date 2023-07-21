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
import axios from "axios";
import { Cookies } from "react-cookie";

function Navbar() {

  const path = "Permission/LoadMenu/";
  const cookies = new Cookies();
  const token = cookies.get("JWTcookie");
  const { sidebar, setSidebar } = useContext(NavContext);
  const [navData, setNavData] = useState({});
  const [userRole,setUserRole]=useState('')
  const [sideBarData, setSideBarData] = useState(SidebarData);
  const [searchQuery, setSearchQuery] = useState("");

  // console.log("NavaData:", navData);
  const loadDate = async () => {
    
    try {
      const response = await axios.get(
        "http://localhost:3000/api/Permission/LoadMenu",
        { headers: { Authorization: "Bearer " + token } }
      );
    //  console.log('Permission Data:',response.data.data);
    //  console.log('User Name:',response.data.data.username);
      // const roleName=response.data.data.data.role;
      setUserRole(response.data.data.role)
      setNavData(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDate();
  }, []);
  const userName=localStorage.getItem('username')
 
  // const filtredMenu=sideBarData.filter((menus)=>{
  //   if( menus.title.toLowerCase().includes(searchQuery.toString().toLowerCase())){
  //     return menus;
  //   }
  // })

  // console.log("SidebarData:", sideBarData);

  // setNavData(filtredMenu)

  // console.log('filtered:',filtredMenu);

  return (
    <React.Fragment>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="nav-li"></li>
          {/* <div className="line-div"></div> */}
          <div className="userinfo-container">
            <h5>Welcome !</h5>
            
            <h3>{userRole}<h5 style={{color:'grey'}}>{`(${userName})`}</h5></h3>
          </div>
          <hr style={{borderColor:'grey'}}></hr>
          {/* <input type="text" id="mySearch" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search..."  /> */}

          {navData.data ? (
            <SubMenu
              key={navData.data}
              navData={navData.data}
              sideBarData={sideBarData}
            />
          ) : (
            () => {
              setSidebar(!sidebar);
            }
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
