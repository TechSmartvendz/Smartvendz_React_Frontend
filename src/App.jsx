import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'


import { useCookies } from 'react-cookie';

import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AuthContext  from './Context/AuthContext';



function App() {
   const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const[isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined)

   

  return (
    <>
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    {isLoggedIn ?  <Dashboard/> :     <Login />}

    </AuthContext.Provider>
      
    </>
)}

export default App;
