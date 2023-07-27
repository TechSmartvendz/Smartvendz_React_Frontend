1.In product component when click on 'bulkupload' button after it should change as 'Search product' name for button
2.When login Home page should render in the same way when logout login page 
3.After search products when we move to bulkupload that the same search product is display we want refresh table after click on bulkupload.


import React, { useState, useContext, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData.jsx";
import "./Navbar.css";
import styled from "styled-components";

import SubMenu from "./SubMenu";
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
  const [navbar, setNavbar] = useState(false);

  const showSidebar = () => setNavbar(!navbar);
  // console.log("NavaData:", navData);
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
  console.log("NavaDaTA:", navData);
  useEffect(() => {
    loadDate();
  }, []);
  const userName = localStorage.getItem("username");

  // const filtredMenu=sideBarData.filter((menus)=>{
  //   if( menus.title.toLowerCase().includes(searchQuery.toString().toLowerCase())){
  //     return menus;
  //   }
  // })

  // console.log("SidebarData:", sideBarData);

  // setNavData(filtredMenu)

  // console.log('filtered:',filtredMenu);

  const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
  `;

  const SidebarWrap = styled.div`
    width: 100%;
  `;

  return (
    <React.Fragment>
      <nav>
        <ul className="nav-menu-items">
          <li className="nav-li"></li>
          {/* <div className="line-div"></div> */}
          <div className="userinfo-container">
            <h5>Welcome !</h5>

            <h3>
              {userRole}
              <h5 style={{ color: "grey" }}>{`(${userName})`}</h5>
            </h3>
          </div>
          <hr style={{ borderColor: "grey" }}></hr>
          {/* <input type="text" id="mySearch" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search..."  /> */}

          <Nav>
            <NavIcon to="/">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <div style={{ width:'100%'}}>
              <NavIcon to="/">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {sideBarData.map((item, index) => {
                return <SubMenu item={item} key={index} navData={navData} />;
              })}
            </div>
          </SidebarNav>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;







import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import styled from "styled-components";

function SubMenu(props) {
  const [navData, setNavData] = useState(props.navData);
  const [sideBarData, setSideBarData] = useState(props.sideBarData);
  const [item, setItem] = useState(props.item);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const showSubnav = () => setOpenSubmenu(!openSubmenu);
  // console.log(openSubmenu)
  useEffect(() => {}, []);

  const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      background: #252831;
      border-left: 4px solid #632ce4;
      cursor: pointer;
    }
  `;

  const SidebarLabel = styled.span`
    margin-left: 16px;
  `;

  const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
      background: #632ce4;
      cursor: pointer;
    }
  `;

  //  if(navData[type.permission]){
  // const submenuSS = item.submenu.map((items) => {
  //   return items.title;
  // });
  // console.log("submenuSS:", submenuSS);
  return (
    <React.Fragment>
      <Link to={item.path} onClick={item.submenu && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.submenu && openSubmenu
            ? item.iconOpened
            : item.submenu
            ? item.iconClosed
            : null}
        </div>
      </Link>

      {openSubmenu &&
        item.submenu.map((items, index) => {
          if (navData[items.permission]) {
            return (
              <DropdownLink to={items.path} key={index}>
                {items.icon}
                <SidebarLabel>{items.title}</SidebarLabel>
              </DropdownLink>
            );
          }
        })}
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
