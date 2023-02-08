import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";
import { useCookies } from "react-cookie";

import Clogo from "../assets/snaxsmart.png";
function Login() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const updateUserid = (e) => {
    setUserid(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/Login", {
        user_id: userid,
        password: password,
      })
      .then((response) => {
        console.log(response.data);

        setCookie("JWTcookie", response.data.data ,{ path: "/" });
        //  alert("successfully login");
        setIsLoggedIn(true);
        
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        alert("invalid email or password");
      });
  };

  return (
    <>
      <div className="loginbody">
        <div className="loginbox">
          <img src={Clogo} className="cicon" />
          <h3>Sign In Here</h3>
          <form onSubmit={submitData}>
            <div className="inputdiv">
              <label>User ID</label>
              <input
                type="text"
                name="user_id"
                value={userid}
                onChange={updateUserid}
                placeholder="User ID"
                required
              />
            </div>
            <div className="inputdiv">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={updatePassword}
                placeholder="User password"
                required
              />
            </div>
            <input type="submit" value="Login" />
          </form>
          <a href="#" className="forgot">
            Forgot Password
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
