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
          <button>
            <i class="fa-brands fa fa-facebook"></i>
          </button>
          <button>
            <i class="fa-brands fa fa-instagram"></i>
          </button>
          <button>
            <i class="fa-brands fa fa-twitter"></i>
          </button>
          <button>
            <i class="fa-brands fa fa-linkedin"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
