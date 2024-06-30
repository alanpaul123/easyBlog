import React from "react";

import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div className="login">
        <div className="wrapper">
          <form
            action="
"
          >
            <h1>Login</h1>
            <div className="input-box">
              <input type="email" placeholder="email" required />
              <i className="fa-solid fa-user icon"></i>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="fa-solid fa-lock icon"></i>
            </div>

            <button type="submit" className="lbtn">
              Login
            </button>

            <div className="register-link">
              <p>
                Don't have an account ? <Link to={"/register"}>Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
