import React from "react";
import { Link } from "react-router-dom";

function AuthorProjects() {
  return (
    <>
      {/* <div className="authProject">
        <div className="authrow">
            <div className="ar">
                <img src="" alt="" />
            </div>
        </div>

        <div className="authrow"></div>
      </div> */}

      <div className="authpost">
        <h1>Authors post</h1>
        <Link to={"/1/author/create"} className="btnc">
          Create Post
        </Link>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="timg" scope="row">
              <img
                className="timgs"
                src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
                alt=""
              />
            </th>
            <td className="tdesc">
              <p>The wonders AI Has in stor......</p>
            </td>
            <td className="tView">
              <Link to={`/1/view`} className="p">
                <p>View</p>
              </Link>
            </td>
            <td className="tedit">
              <Link to={`/1/author/edit`} className="btnp">Edit</Link>
            </td>
            <td className="tedit">
              <button className="btnd">Delete</button>
            </td>
          </tr>

          <tr>
            <th className="timg" scope="row">
              <img
                className="timgs"
                src="https://www.holidaymonk.com/wp-content/uploads/2023/05/Travel-Guide-to-Vietnam.jpg"
                alt=""
              />
            </th>
            <td className="tdesc">
              <p>Vietnam is the best place ......</p>
            </td>
            <td className="tView">
              <Link to={`/1/view`} className="p">
                <p>View</p>
              </Link>
            </td>
            <td className="tedit">
              <button className="btnp">Edit</button>
            </td>
            <td className="tedit">
              <button className="btnd">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AuthorProjects;
