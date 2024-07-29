import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAPI } from "../services/allAPI";
import { tokenAuthContext } from "../contexts/AuthContext";

function Login() {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      // Api Call

      try {
        const result = await loginAPI(userData);

        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          setIsAuthorised(true);
          toast.info(`Welcome  ${result.data.user.username}...`);
          setUserData({
            username: "",
            email: "",
            password: "",
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          if (result.response.status == 404) {
            toast.error(result.response.data);
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.info("Please fill the form completely");
    }
  };
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
              <input
                type="email"
                placeholder="email"
                required
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <i className="fa-solid fa-user icon"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              <i className="fa-solid fa-lock icon"></i>
            </div>

            <button onClick={handleLogin} type="submit" className="lbtn">
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
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </div>
  );
}

export default Login;
