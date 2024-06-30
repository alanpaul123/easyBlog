import React from "react";
import logo from "../assets/logo.webp";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <ul className="navi">
          <li>
            <Link to={"/blogs"} className="blo">
              Blogs
            </Link>
          </li>
          <li>
            <Link to={"/authors"} className="authLink">
              Author
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="loginBtn">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
