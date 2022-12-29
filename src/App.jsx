import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AuthContext  from './Context/AuthContext';
import NavContext from './Context/NavContext';


function App() {
   const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const[isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined)

    const [sidebar, setSidebar] = useState(false);


  return (
    <>
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    {isLoggedIn ? 
     <NavContext.Provider value={{sidebar, setSidebar}}>
     <Dashboard/> 
     </NavContext.Provider>

     : <Login />}

    </AuthContext.Provider>
    </>
)}

export default App;
