import React from "react";
import { Link } from "react-router-dom";

function Authors() {
  return (
    <div className="authors">
      <h1>Authors</h1>
      <div className="authbox">
        <div className="auth">
          <div className="authimg">
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
          </div>

          <div className="authp">
            <h3>Jack Dane</h3>
            <Link className="lip" to={"/1/author"}>
              <p>2 post</p>
            </Link>
          </div>
        </div>

        <div className="auth">
          <div className="authimg">
            <img
              src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
              alt=""
            />
          </div>
          <div className="authp">
            <h3>Alexander</h3>
            <p>3 post</p>
          </div>
        </div>

        <div className="auth">
          <div className="authimg">
            <img
              src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600nw-1768126784.jpg"
              alt=""
            />
          </div>
          <div className="authp">
            <h3>Jack Cooper</h3>
            <p>4 post</p>
          </div>
        </div>

        <div className="auth">
          <div className="authimg">
            <img
              src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              alt=""
            />
          </div>
          <div className="authp">
            <h3>Jane Dane</h3>
            <p>4 post</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authors;
