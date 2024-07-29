import React, { useContext } from "react";
import logo from "../assets/logo.webp";
import { useNavigate, Link } from "react-router-dom";
import { tokenAuthContext } from "../contexts/AuthContext";

function Header() {
  const navigate = useNavigate();

  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext);

  const logout = function () {
    sessionStorage.removeItem("token");
    setIsAuthorised(false);
  };
  return (
    <>
      <div className="nav">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        {/* {sessionStorage.getItem("token") ? (
          <div>
            <input type="checkbox" id="check" />
            <label for="check" className="icons">
              <i className="fa-solid fa-x cross"></i>
              <i className="fa-solid fa-bars menu"></i>
            </label>
          </div>
        ) : (
          ""
        )} */}

        {sessionStorage.getItem("token") ? (
          <ul className="navi">
            <li>
              <Link to={"/blogs"} className="blo rli">
                Blogs
              </Link>
            </li>
            <li>
              <Link to={"/author"} className="authLink rli ">
                User blogs
              </Link>
            </li>

            <li>
              <Link to={"/login"} className="loginBtn rli" onClick={logout}>
                Log Out
              </Link>
            </li>
          </ul>
        ) : (
          <Link to={"/login"} className="loginBtn">
            Log In
          </Link>
        )}
      </div>
    </>
  );
}

export default Header;

{
}

// <div className="navbar">
// {sessionStorage.getItem("token") ? (
//   <ul className="navi">
//     <li>
//       <Link to={"/blogs"} className="blo rli">
//         Blogs
//       </Link>
//     </li>

//     <li>
//       <Link to={"/author"} className="authLink rli">
//         User blogs
//       </Link>
//     </li>

//     <li>
//       <Link to={"/login"} className="loginBtn rli" onClick={logout}>
//         Log Out
//       </Link>
//     </li>
//   </ul>
// ) : (
//   <Link to={"/login"} className="loginBtn">
//     Log In
//   </Link>
// )}
// </div>
