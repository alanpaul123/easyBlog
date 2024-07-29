import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allBlogAPI } from "../services/allAPI";
import SERVERURL from "../services/serverurl";
import ViewCard from "../components/ViewCard";

function Blogs() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  console.log(allBlogs);
  useEffect(() => {
    getAllBlogs();
  }, [searchKey]);

  const getAllBlogs = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      // api call

      try {
        const result = await allBlogAPI(searchKey, reqHeader);
        if (result.status == 200) {
          setAllBlogs(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="sec1">
      <div className="sbox">
        <p className="sp">Our Blogs</p>
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          className="search"
          placeholder="SEARCH ANY BLOG"
        />
        <h1>Find our all Blogs from here</h1>
        <p className="sp2">
          Search for blogs relating to anything ... <br />
          We provide blogs for a wide range of topics
        </p>
      </div>

      <div className="popularboxesb">
        {allBlogs?.length > 0 ? (
          allBlogs?.map((blog) => (
            // <div className="popb">
            //   <img src={`${SERVERURL}/uploads/${blog?.blogImg}`} alt="" />

            //   <p>
            //     <span className="type">{blog.type}</span>
            //     {blog.date}
            //   </p>
            //   <h2>{blog.title}</h2>
            //   <p className="q">{blog.content}</p>

            //   <Link to={`/${blog._id}/view-blog`}>See More ...</Link>
            // </div>
            <ViewCard displayData={blog} />
          ))
        ) : (
          <div className="close text-danger fs-5 m-5">Its not Found</div>
        )}
      </div>
    </div>
  );
}

export default Blogs;
