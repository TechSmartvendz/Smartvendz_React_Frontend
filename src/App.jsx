import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'


import { Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';

import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { createContext } from 'react';
import AuthContext  from './Context/AuthContext';

// import Products_csv from './components/Products_csv';
// const UserContext = createContext()

function App() {
   const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const[isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined)

     
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
  
}
   

  return (
    <>
      <p>hello</p>

    </>
)}

export default App;
