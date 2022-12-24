import React,{useState} from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Products_csv from './Products_csv';
function Login(props) {

  function handleChange(val) {
    // Here, we invoke the callback with the new value
    props.ValueChange(val);
}
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
  const [cookies, setCookie] = useCookies(['user']);


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
     handleChange(true);
     
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