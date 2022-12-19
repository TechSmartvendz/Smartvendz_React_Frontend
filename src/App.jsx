import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'


import { Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';

import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";


function App() {
   const [cookies, setCookie] = useCookies(['user']);
   //console.log(cookies.JWTcookie!=undefined);
   const [isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined);
  
   function handleChange(newValue) {
    setIsLoggedIn(newValue);
  }
  
   if (isLoggedIn) {
    return <Dashboard/>
} else {
    // If user is logged out
    return <Login onChange={handleChange}/>
}

  return (
    <>
  {
   
}
    </>
  );
}

export default App;
