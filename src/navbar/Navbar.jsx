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
import { Cookies } from 'react-cookie';

function Navbar() {
  const path = "Permission/LoadMenu/";
  const cookies = new Cookies();
  const token = cookies.get('JWTcookie')
  const { sidebar, setSidebar } = useContext(NavContext);
  const [navData, setNavData] = useState();

  const [sideBarData, setSideBarData] = useState(SidebarData);
  const [searchQuery, setSearchQuery] = useState('')


  const loadDate = async () => {
    // console.log("loadData() start")
    // const response = await getReq(`${path}`);
    // if (response.data) {
    //   // console.log(response.data);
    //  setNavData(response.data);
    // } else {
    //   // console.log(response.data);
    //   setNavData();
    // }
    try {
   const res= await axios.get('http://localhost:3000/api/Permission/LoadMenu', { headers: { 'Authorization': 'Bearer ' + token } })
      const data=res.data.data
      setNavData(data);
    } catch (error) {
       console.log(error);
    }
   
      
  };

  useEffect(() => {
    loadDate();
  }, []);

  function handlesearchFilter(e) {
    setSearchQuery(e.target.value)
  }

  const filtredMenu = sideBarData.filter((menus) =>
    menus.title[0].toLowerCase().includes(searchQuery.toLowerCase())
  )


  return (
    <React.Fragment>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>

        <ul className="nav-menu-items">

          <li className="nav-li">
            <Link to="#" className="navbar-icon crossbutton">
              <AiIcons.AiOutlineClose
                size={25}
                onClick={() => setSidebar(!sidebar)}

              />
            </Link>*
          </li>
          <input type="text" id="mySearch" value={searchQuery} onChange={handlesearchFilter} placeholder="Search..." />

          {navData && navData ? <SubMenu key={navData} navData={navData} sideBarData={filtredMenu} /> : (() => { setSidebar(!sidebar) })}


        </ul>
      </nav>

    </React.Fragment>
  );

}

export default Navbar;
