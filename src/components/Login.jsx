import React,{useState} from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import AuthContext from '../Context/AuthContext';
import {useContext} from 'react';

function Login() {


   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
  const [cookies, setCookie] = useCookies(['user']);
  const{isLoggedIn, setIsLoggedIn } = useContext(AuthContext)




  const updateEmail=(e)=>
  {
    setEmail(e.target.value)
  }

  const updatePassword=(e)=>{
    setPassword(e.target.value);
  }

  const submitData= async (e)=>{
    e.preventDefault();
   await axios.post("http://localhost:3000/login",{
      email:email,
      password:password
     }).then((response)=>{
      
     console.log(response.data);
 
     setCookie('JWTcookie', response.data.session_token, { path: '/' });
     alert("successfully login");
        setIsLoggedIn(true)

     
     }).catch((error)=>{
      console.log(error);
      console.log(error.response);
      alert("invalid email or password");
     })
    
  }
 
   return (
     <>

    <div>
    <h2>Login here</h2>
    <form onSubmit={submitData}>
    
    <div>
    <label>Email</label>
    <input type="email" name="email" value={email} onChange={updateEmail}   placeholder="Enter email"  required/>
    </div>
    <div>
    <label>Password</label>
    <input type="password" name="password" value={password} onChange={updatePassword} placeholder="Enter password"  required/>
    </div>
     <input type="submit" style={{backgroundColor:"green",color:"white",cursor:"pointer"}} value="Login" />

    
    </form>
    <Products_csv/>
    </div>
    </>
  )
}

export default Login