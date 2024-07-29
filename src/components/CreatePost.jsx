import React, { useState, useEffect, useContext } from "react";
import uploadImg from "../assets/uploadImg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBlogAPI } from "../services/allAPI";
import { useNavigate } from "react-router-dom";
import { addResponseContext } from "../contexts/ContextAPI";

function CreatePost() {
  const { addResponse, setAddResponse } = useContext(addResponseContext);
  const [preview, setPreview] = useState(uploadImg);
  const [imgfStatus, setImgfStatus] = useState(false);
  const [blogDetails, setBlogDetails] = useState({
    type: "",
    date: "",
    title: "",
    authorName: "",
    content: "",
    blogImg: "",
  });

  const navigate = useNavigate();
  const handleCancel = () => {
    setBlogDetails({
      type: "",
      date: "",
      title: "",
      authorName: "",
      content: "",
      blogImg: "",
    });
  };

  useEffect(() => {
    if (
      blogDetails.blogImg.type == "image/png" ||
      blogDetails.blogImg.type == "image/jpg" ||
      blogDetails.blogImg.type == "image/jpeg"
    ) {
      setImgfStatus(true);
      setPreview(URL.createObjectURL(blogDetails.blogImg));
    } else {
      setImgfStatus(false);
      setPreview(uploadImg);
      setBlogDetails({ ...blogDetails, blogImg: "" });
    }
  }, [blogDetails.blogImg]);
  // console.log(blogDetails);

  const handleAddBlog = async () => {
    const { type, date, title, authorName, content, blogImg } = blogDetails;
    if (
      blogDetails.type &&
      blogDetails.date &&
      blogDetails.title &&
      blogDetails.authorName &&
      blogDetails.content &&
      blogDetails.blogImg
    ) {
      // ReqBody -add items to form data

      const reqBody = new FormData();

      // there should be name(key) and value(string or media file type)
      reqBody.append("type", type);
      reqBody.append("date", date);
      reqBody.append("title", title);
      reqBody.append("authorName", authorName);
      reqBody.append("content", content);
      reqBody.append("blogImg", blogImg);
      const token = sessionStorage.getItem("token");
      // Authorization means what all features authincated used can access
      // Bearer another string used to give token company
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        // api call-reqBody,reqHeader
        try {
          const result = await addBlogAPI(reqBody, reqHeader);
          console.log(result);
          if (result.status == 200) {
            alert("Project added successfully");
            navigate("/author");
            setAddResponse(result);
          } else {
            // toast.warning(result.response.blog);
            toast.warning("failed");
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      toast.info("Please create the blog completely");
    }
  };

  return (
    <div className="create-box">
      <h1>Create Post</h1>

      <div className="cpb">
        <div className="createpost">
          <input
            className="input"
            type="text"
            placeholder="Enter The Type of Blog"
            value={blogDetails.type}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, type: e.target.value })
            }
          />
          <input
            className="input"
            type="text"
            placeholder="Enter Date"
            value={blogDetails.date}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, date: e.target.value })
            }
          />
          <input
            className="input"
            type="text"
            placeholder="Enter Title"
            value={blogDetails.title}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, title: e.target.value })
            }
          />
          <input
            className="input"
            type="text"
            placeholder="Enter Authors name"
            value={blogDetails.authorName}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, authorName: e.target.value })
            }
          />

          <textarea
            className="cpbox input"
            type="text"
            value={blogDetails.content}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, content: e.target.value })
            }
          />

          <label>
            <img
              src={preview}
              alt=""
              style={{ width: "100px", height: "100px", marginTop: "50px" }}
            />
            <input
              type="file"
              className="pic"
              style={{ display: "none" }}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, blogImg: e.target.files[0] })
              }
            />
          </label>

          {!imgfStatus && (
            <div className="imgt">
              *Upload only the following file types (jpeg,jpg,png) here!!!
            </div>
          )}

          <div className="db">
            <button onClick={handleAddBlog} className="btnu">
              Upload
            </button>
            <button onClick={handleCancel} className="btnu">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </div>
  );
}

export default CreatePost;
