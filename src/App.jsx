import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'


import { useCookies } from 'react-cookie';

import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AuthContext  from './Context/AuthContext';


// import Products_csv from './components/Products_csv';
// const UserContext = createContext()

function App() {
   const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const[isLoggedIn, setIsLoggedIn] = useState(cookies.JWTcookie!=undefined)

   

  return (
    <>
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    {isLoggedIn ?  <Dashboard/> :     <Login />}

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
