import React from "react";
import snaxsmart from "../assets/snaxsmart.png";
//import { Cookies } from 'react-cookie';
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import NavContext from "../Context/NavContext";
import Navbar from "../navbar/Navbar";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiOutlineSetting, AiOutlineFullscreen } from 'react-icons/ai'
import { BsQuestionCircle } from 'react-icons/bs'
function Header() {

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { sidebar, setSidebar } = useContext(NavContext);

  const navigate = useNavigate();

  function logout() {
    setIsLoggedIn(false);
    localStorage.clear();

    removeCookie('JWTcookie', { path: "/" });
    if (isLoggedIn) {
      navigate('../')
    }
    //   (function () {
    //     var cookies = document.cookie.split("; ");
    //     for (var c = 0; c < cookies.length; c++) {
    //         var d = window.location.hostname.split(".");
    //         while (d.length > 0) {
    //             var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
    //             var p = location.pathname.split('/');
    //             document.cookie = cookieBase + '/';
    //             while (p.length > 0) {
    //                 document.cookie = cookieBase + p.join('/');
    //                 p.pop();
    //             };
    //             d.shift();
    //         }
    //     }
    // })();
  }

  // const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);
  // style={{display: sidebar ?'block':'none'}}

  // function showSidebar() {
  //   setSidebar(!sidebar);
  // }

  return (
    <>
      <div className="header" >
        {/* <NavContext.Provider value={{ sidebar, setSidebar }}>*/}

        <div className="navbar-btn">
          {/* <Link to='#' className='menu-bars'> */}
          {sidebar ?
            (

              <Link to='#' className='navbar-icon' onClick={() => setSidebar(false)}>
                <AiIcons.AiOutlineClose size={26}  />
              </Link>
            ) : (
              <Link to='#' className='navbar-icon' onClick={() => setSidebar(true)}>
                <FaIcons.FaBars size={26}  />
              </Link>
            )
          }
          {/* </Link> */}
        </div>

        {/*  </NavContext.Provider>

        <div className="headercontent" id="time">
          Fri Dec 09 2022 09:35:30 GMT +0530(India Standard Time)
        </div>
      */}

        <div className="headercontent">
          <Link to="/"><img className="logo-img" src={snaxsmart} alt="snaxsmart" /></Link>
        </div>

        <div className="headercontent">

          <div className="icon-div"><AiOutlineSetting className="settings-icon" /></div>
          <div className="icon-div"><BsQuestionCircle className="settings-icon" /></div>
          <div className="icon-div"><AiOutlineFullscreen className="settings-icon" /></div>
          <div className="icon-div"><AiOutlineLogout className="logout-icon" onClick={logout} /></div>
        </div>

      </div>
    </>
  );
}

export default Header;
