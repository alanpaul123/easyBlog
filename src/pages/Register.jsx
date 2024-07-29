import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerAPI } from "../services/allAPI";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (userData.username && userData.email && userData.password) {
      // Api Call
      try {
        const result = await registerAPI(userData);
        console.log(result);
        if (result.status == 200) {
          alert(
            `Welcome ${result?.data?.username}....Please Login to Expore More Blogs`
          );
          setUserData({
            username: "",
            email: "",
            password: "",
          });

          navigate("/login");
        } else {
          if (result.response.status == 406) {
            toast.error(result.response.data);
            setUserData({ username: "", email: "", password: "" });
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.info("Please fill the form completely");
    }
  };

  console.log(userData);
  return (
    <>
      <div className="regBox">
        <div className="regForm">
          <h1>Registraion Form</h1>
          <input
            type="text"
            placeholder="username"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <button onClick={handleRegister} className="regBtn">
            Register
          </button>
          <p>
            Aldready have an acoount ?{" "}
            <Link to={"/login"} className="lognav">
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </>
  );
}

export default Register;
