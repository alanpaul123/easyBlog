import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { removeBlogAPI, userBlogAPI } from "../services/allAPI";
import SERVERURL from "../services/serverurl";
import {
  addResponseContext,
  editResponseContext,
} from "../contexts/ContextAPI";
import EditBlog from "../components/EditBlog";

function AuthorProjects() {
  const { addResponse, setAddResponse } = useContext(addResponseContext);
  const { editResponse, setEditResponse } = useContext(editResponseContext);
  const [username, setUsername] = useState("");

  const [userBlogs, setuserBlogs] = useState("");
  const getUserBlogs = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      // api call

      try {
        const result = await userBlogAPI(reqHeader);
        if (result.status == 200) {
          setuserBlogs(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(userBlogs);
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username);
    } else {
      setUsername("");
    }

    getUserBlogs();
  }, [addResponse, editResponse]);

  const handleDeleteBlog = async (pid) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await removeBlogAPI(pid, reqHeader);
        if (result.status == 200) {
          getUserBlogs();
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="authpost">
        <h1>Welcome {username}</h1>
        <Link to={"/author-create"} className="btnc">
          Create Post
        </Link>
      </div>

      <div className="popularboxesu">
        {userBlogs?.length > 0 ? (
          userBlogs.map((blog) => (
            <div className="userblog">
              <img src={`${SERVERURL}/uploads/${blog?.blogImg}`} alt="" />

              <p className="s1">
                <span className="uc">{blog.authorName}</span> {blog.date}
              </p>

              <p className="s2">{blog.title}</p>
              <p>{blog.content.substr(0, 30)}...</p>

              <div className="d-flex">
                <EditBlog blog={blog} />

                <button
                  onClick={() => handleDeleteBlog(blog?._id)}
                  className="btn btn-danger ubd"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="close text-danger fs-5 m-5">Its not Found</div>
        )}
      </div>
    </>
  );
}

export default AuthorProjects;
