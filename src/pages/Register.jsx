import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="regBox">
        <div className="regForm">
          <h1>Registraion Form</h1>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Enter password again" />

          <button className="regBtn">Register</button>
          <p>
            Aldready have an acoount ?{" "}
            <Link to={"/login"} className="lognav">
              Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
