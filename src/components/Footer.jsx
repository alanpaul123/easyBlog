import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <p className="pe">Easy Blog</p>

        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact US</a>
          </li>
        </ul>

      <div className="socials">
        <button><i class="fa-brands fa-facebook"></i></button>
        <button><i class="fa-brands fa-instagram"></i></button>
        <button><i class="fa-brands fa-twitter"></i></button>
        <button><i class="fa-brands fa-linkedin"></i></button>
      </div>
      </div>
    </>
  );
}

export default Footer;
