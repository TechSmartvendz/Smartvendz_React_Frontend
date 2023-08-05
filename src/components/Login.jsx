import React, { useState, useContext } from "react";
import {postReq } from "./middleware/AxiosApisCall";
import AuthContext from "../Context/AuthContext";
import { useCookies } from "react-cookie";
import { SuccessAlert, ErrorAlert } from "./middleware/AlertMsg";
import {FaEyeSlash,FaEye} from 'react-icons/all'
import Clogo from "../assets/snaxsmart.png";

function Login() {
  const path = "Login";
  const [inputs, setInputs] = useState({});
  const [cookies, setCookie] = useCookies(["user"]);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [wrong,setWrong]=useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await postReq(path,inputs);
     
      if (response.success) {
        localStorage.setItem('username',response.data.username);
        setCookie("JWTcookie", response.data.token ,{ path: "/" });
        setIsLoggedIn(true);
        
      } else {
        setWrong(true)
       
      }
// console.log('Logged IN:',isLoggedIn)
  };

  return (
    <>
      <div className="loginbody">
        <div className="loginbox">
          <img src={Clogo} className="cicon" />
          <h3 className="signinhere">Sign In Here</h3>
          {  wrong ? (<div style={{color:'white',padding:'3px' ,marginBottom:'13px',backgroundColor:'red'}} >Wrong User-ID or Password </div>):''}
        
          <form onSubmit={handleSubmit}>
            <div className="inputdiv">
              
              <input
                type="text"
                name="user_id"
                value={inputs.user_id || ""}
                onChange={handleChange}
                placeholder="User ID"
                required
                autoComplete="off"
              />
            </div>
            <div className="inputdiv">
              
              <input
                type={showPassword ? 'text' :'password'}
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                placeholder="User password"
                required
                autoComplete="off"
              />
               <span className="showicon" onClick={handleTogglePassword}>
        {showPassword ? <FaEyeSlash className="eyeicon"/> : <FaEye className="eyeicon"/>}
          </span>
            </div>
           
             <input  type="submit" value="Login" />
          </form>
          <a href="#" className="forgot">
            Forgot Password
          </a>
        </div>
      </div>
    </>
  )
}
  

export default Login;

