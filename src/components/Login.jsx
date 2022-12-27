import React,{useState} from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import AuthContext from '../Context/AuthContext';
import {useContext} from 'react';

function Login() {

//   function handleChange() {
//     // Here, we invoke the callback with the new value
//     setisLoggedIn(true)
// }
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
  const [cookies, setCookie] = useCookies(['user']);
  const{isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  // function handleChange() {
  //   setIsLoggedIn(true)
  // }



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
    <div className='loginbody'>
    <div className='loginbox'>
    <img src={Clogo} className="cicon" />
    <h3>Sign In Here</h3>
    <form onSubmit={submitData}>
    
    <div className='inputdiv'>
    <label>Email</label>
    <input type="email" name="email" value={email} onChange={updateEmail}   placeholder=" User email"  required/>
    </div>
    <div className='inputdiv'>
    <label>Password</label>
    <input type="password" name="password" value={password} onChange={updatePassword} placeholder="User password"  required/>
    </div>
     <input type="submit"  value="Login"  />
    
    
    </form>
    <a href='#' className='forgot'>Forgot Password</a>
    </div>
    </div>
    </>
  )
}

export default Login