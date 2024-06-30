import React from "react";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <>
      <div className="sbox">
        <p className="sp">Our Blogs</p>
        <input type="search" className="search" placeholder="SEARCH ANY BLOG" />
        <h1>Find our all Blogs from here</h1>
        <p className="sp2">
          Search for blogs relating to anything ... <br />
          We provide blogs for a wide range of topics
        </p>
      </div>

      <div className="popularboxesb">
        <div className="popb pop">
          <img
            src="https://www.billboard.com/wp-content/uploads/media/kanye-west-iheartradio-music-festival-billboard-650.jpg?w=650"
            alt=""
          />

          <p>
            <span className="type">Travel</span>13 March 2023
          </p>
          <h2>
            Who is the best singer on Chart? <br />
            Knows him?
          </h2>
          <p className="q">
            Chart by Billboard which ranks the all-time greatest....
          </p>

          <Link to={"/1/view"}>See More ...</Link>
        </div>

        <div className="popb pop">
          <img
            src="https://www.billboard.com/wp-content/uploads/media/kanye-west-iheartradio-music-festival-billboard-650.jpg?w=650"
            alt=""
          />

          <p>
            <span className="type">Travel</span>13 March 2023
          </p>
          <h2>
            Who is the best singer on Chart? <br />
            Knows him?
          </h2>
          <p className="q">
            Chart by Billboard which ranks the all-time greatest....
          </p>

          <Link to={"/2/view"}>See More ...</Link>
        </div>

        <div className="popb pop">
          <img
            src="https://www.billboard.com/wp-content/uploads/media/kanye-west-iheartradio-music-festival-billboard-650.jpg?w=650"
            alt=""
          />

          <p>
            <span className="type">Travel</span>13 March 2023
          </p>
          <h2>
            Who is the best singer on Chart? <br />
            Knows him?
          </h2>
          <p className="q">
            Chart by Billboard which ranks the all-time greatest....
          </p>

          <Link to={"/3/view"}>See More ...</Link>
        </div>

        <div className="popb pop">
          <img
            src="https://www.billboard.com/wp-content/uploads/media/kanye-west-iheartradio-music-festival-billboard-650.jpg?w=650"
            alt=""
          />

          <p>
            <span className="type">Travel</span>13 March 2023
          </p>
          <h2>
            Who is the best singer on Chart? <br />
            Knows him?
          </h2>
          <p className="q">
            Chart by Billboard which ranks the all-time greatest....
          </p>

          <Link to={"/1/view"}>See More ...</Link>
        </div>

        <div className="popb pop">
          <img
            src="https://www.billboard.com/wp-content/uploads/media/kanye-west-iheartradio-music-festival-billboard-650.jpg?w=650"
            alt=""
          />

          <p>
            <span className="type">Travel</span>13 March 2023
          </p>
          <h2>
            Who is the best singer on Chart? <br />
            Knows him?
          </h2>
          <p className="q">
            Chart by Billboard which ranks the all-time greatest....
          </p>

          <Link to={"/1/view"}>See More ...</Link>
        </div>

        <div className="popb pop">
          <img
            src="https://www.billboard.com/wp-content/uploads/media/kanye-west-iheartradio-music-festival-billboard-650.jpg?w=650"
            alt=""
          />

          <p>
            <span className="type">Travel</span>13 March 2023
          </p>
          <h2>
            Who is the best singer on Chart? <br />
            Knows him?
          </h2>
          <p className="q">
            Chart by Billboard which ranks the all-time greatest....
          </p>

          <Link to={"/1/view"}>See More ...</Link>
        </div>
      </div>
    </>
  );
}

export default Blogs;
