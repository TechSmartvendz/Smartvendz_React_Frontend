import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'


import { Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';

import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { createContext } from 'react';
import AuthContext  from './Context/AuthContext';


// const UserContext = createContext()

function App() {
   const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const[isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined)

    console.log(cookies);
     
   function handleChange(newValue) {
    setIsLoggedIn(newValue);
  }
  
   if (isLoggedIn)  {
    return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>

    <Dashboard/>
    </AuthContext.Provider>
    )


} else {
    // If user is logged out
   return <Login ValueChange={handleChange}/>
  //  return <Login />
}
   
   {/* //console.log(cookies.JWTcookie!=undefined);
  //  const [isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined);

  //const[isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined)
  const[isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined) */}



  return (
    <>
      <p>hello</p>
    </>
)}

export default App;
