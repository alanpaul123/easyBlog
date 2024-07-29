import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import uploadImg from "../assets/uploadImg.png";
import SERVERURL from "../services/serverurl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editBlogAPI } from "../services/allAPI";
import { editResponseContext } from "../contexts/ContextAPI";

function EditBlog({ blog }) {
  const { editResponse, setEditResponse } = useContext(editResponseContext);
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(uploadImg);
  const [imgfStatus, setImgfStatus] = useState(true);

  const [blogDetails, setBlogDetails] = useState({
    id: blog?._id,
    type: blog?.type,
    date: blog?.date,
    title: blog?.title,
    authorName: blog?.authorName,
    content: blog?.content,
    blogImg: "",
  });

  const handleClose = () => {
    setShow(false);
    setBlogDetails({
      id: blog?._id,
      type: blog?.type,
      date: blog?.date,
      title: blog?.title,
      authorName: blog?.authorName,
      content: blog?.content,
      blogImg: "",
    });
  };
  const handleShow = () => {
    setShow(true);
    setBlogDetails({
      id: blog?._id,
      type: blog?.type,
      date: blog?.date,
      title: blog?.title,
      authorName: blog?.authorName,
      content: blog?.content,
      blogImg: "",
    });
  };

  useEffect(() => {
    if (
      blogDetails.blogImg.type == "image/png" ||
      blogDetails.blogImg.type == "image/jpg" ||
      blogDetails.blogImg.type == "image/jpeg"
    ) {
      setPreview(URL.createObjectURL(blogDetails.blogImg));
      setImgfStatus(true);
    } else {
      setImgfStatus(false);
      setPreview("");
      // setBlogDetails({ ...setBlogDetails, blogImg: "" });
    }
  }, [blogDetails.blogImg]);

  const handleUpdateBlog = async () => {
    const { id, type, date, title, authorName, content, blogImg } = blogDetails;

    if (type && date && title && authorName && content) {
      // api call proceed

      const reqBody = new FormData();

      // there should be name(key) and value(string or media file type)
      reqBody.append("type", type);
      reqBody.append("date", date);
      reqBody.append("title", title);
      reqBody.append("authorName", authorName);
      reqBody.append("content", content);
      preview
        ? reqBody.append("blogImg", blogImg)
        : reqBody.append("blogImg", blog.blogImg);

      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          Authorization: `Bearer ${token}`,
        };

        // api call
        try {
          const result = await editBlogAPI(id, reqBody, reqHeader);

          if (result.status == 200) {
            handleClose();
            // pass response view
            setEditResponse(result);
          } else {
            console.log(result.response);
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      toast.warning("Please fill the form completely");
    }
  };

  return (
    <>
      <button
        onClick={handleShow}
        className="btn btn-success ube"
        style={{ marginRight: "10px" }}
      >
        Update
      </button>

      <Modal show={show} onHide={handleClose} className="editModal" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Update Your Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bod">
          <input
            type="text"
            className="updateBox"
            id="type"
            value={blogDetails.type}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, type: e.target.value })
            }
          />
          <input
            type="text"
            className="updateBox"
            id="date"
            value={blogDetails.date}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, date: e.target.value })
            }
          />
          <input
            type="text"
            className="updateBox"
            id="title"
            value={blogDetails.title}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, title: e.target.value })
            }
          />

          <input
            type="text"
            className="updateBox"
            id="authorname"
            value={blogDetails.authorName}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, authorName: e.target.value })
            }
          />

          <textarea
            className="editText"
            name=""
            id=""
            value={blogDetails.content}
            onChange={(e) =>
              setBlogDetails({ ...blogDetails, content: e.target.value })
            }
          ></textarea>
          <label>
            <img
              src={preview ? preview : `${SERVERURL}/uploads/${blog?.blogImg}`}
              alt=""
              style={{
                width: "100px",
                height: "100px",
              }}
              className="eimg"
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
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdateBlog}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </>
  );
}

export default EditBlog;
