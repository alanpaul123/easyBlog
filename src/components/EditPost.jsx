import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditPost() {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
  ];

  const module = {
    toolbar: toolbarOptions,
  };
  return (
    <div className="create-box">
      <h1>Edit Post</h1>

      <div className="cpb">
        <div className="createpost">
          <input
            className="input"
            type="text"
            placeholder="Enter The Type of Blog"
          />
          <input className="input" type="text" placeholder="Enter Date " />
          <input
            className="input"
            type="text"
            placeholder="Enter Authors name  "
          />

          <ReactQuill
            className="cpbox"
            module={{ toolbar: toolbarOptions }}
            theme="snow"
            // value={value || ""}
          />

          <label>
            <input type="file" className="pic" />
          </label>

          <button className="btnu">Upload</button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
