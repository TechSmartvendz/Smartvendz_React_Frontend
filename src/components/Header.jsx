import React from 'react';
 import snaxsmart from '../assets/snaxsmart.png';
 //import { Cookies } from 'react-cookie';

import { useCookies } from 'react-cookie';
 import {useContext} from 'react'
 import AuthContext from '../Context/AuthContext';



function Header(props) {
  //const [cookies, setCookie] = useCookies(['user']);
 // const[removeCookie] = useCookies(['user'])

//   function logout() {
//     console.log(cookies.JWTcookie)
//     cookies.remove('JWTcookie');
//  console.log("cookie removed");
//     console.log(cookies.JWTcookie)
//     setIsLoggedIn(false);

//   }

// function handleChange(val) {
//   // Here, we invoke the callback with the new value
//   props.ValueChange(val);
//   cookies.remove('JWTcookie');
// }
const [cookies, setCookie, removeCookie] = useCookies(['user']);
const{isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

function logout() {
  setIsLoggedIn(false)
  
  removeCookie('JWTcookie',{path:'/'});
  

}

  return (
    <>
    <div className="header">
      

      
      <div className="headercontent" id="time">Fri Dec 09 2022 09:35:30 GMT +0530(India Standard Time)</div>   

      <div className="headercontent">
        {/* <img class="logo-main scale-with-grid" src="http://snaxsmart.com/wp-content/uploads/2018/05/logo-1.png" data-retina="http://snaxsmart.com/wp-content/uploads/2018/05/logo-1.png" data-height="88" alt="snacks vending machine" /> */}
         {/* <img src="/snaxsmart.png"/>   */}
         <img src={snaxsmart} alt = "snaxsmart" />
        </div> 
      {/* <div className="headercontent">2</div> */}
      <div className="headercontent">


      <button className='logout-btn' onClick={logout}>signout branch3</button>
      </div>  
      </div>
        
    </>
  )
}

export default Header