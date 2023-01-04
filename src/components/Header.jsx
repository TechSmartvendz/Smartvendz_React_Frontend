import React from 'react';
 import snaxsmart from '../assets/snaxsmart.png';
 //import { Cookies } from 'react-cookie';

import { useCookies } from 'react-cookie';
 import {useContext} from 'react'
 import AuthContext from '../Context/AuthContext';



function Header() {

  // const[removeCookie] = useCookies(['user'])

const [cookies, setCookie,removeCookie] = useCookies(['user']);
const{isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

function logout() {
  alert("Are you want to Log out?");
  setIsLoggedIn(false)
  
  removeCookie('JWTcookie',{path:"/"});
  

}

  return (
    <>
    <div className="header">
      

      
      <div className="headercontent" id="time">Fri Dec 09 2022 09:35:30 GMT +0530(India Standard Time)</div>   

      <div className="headercontent">
    
         <img src={snaxsmart} alt = "snaxsmart" />
        </div> 

      <div className="headercontent">



      <button className='logout-btn' onClick={logout}>Logout</button>
      </div>  

      </div>
        
    </>
  )
}

export default Header