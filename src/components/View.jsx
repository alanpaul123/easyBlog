import React from "react";
import { Link } from "react-router-dom";
function View() {
  return (
    <>
      <div className="vbox">
        <p className="v">
          Development <span>16 March 2023</span>
        </p>

        <div className="vc">
          <p>
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
          </p>
          <button>Edit</button>
          <button>Delete</button>
        </div>

        <h2 className="v">
          How to make a Game look more attractive <br /> with new AR and AI
          Technology
        </h2>

        <div className="vimg">
          <img
            src="https://img.freepik.com/premium-photo/realm-virtual-augmented-reality-ai_971989-4923.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="vboxp">
        <p>
          Artificial intelligence algorithms are designed to make decisions,
          often using real-time data. They are unlike passive machines that are
          capable only of mechanical or predetermined responses. Using sensors,
          digital data, or remote inputs, they combine information from a
          variety of different sources, analyze the material instantly, and act
          on the insights derived from those data. With massive improvements in
          storage systems, processing speeds, and analytic techniques, they are
          capable of tremendous sophistication in analysis and decisionmaking.
        </p>

        <p>
          AI systems have the ability to learn and adapt as they make decisions.
          In the transportation area, for example, semi-autonomous vehicles have
          tools that let drivers and vehicles know about upcoming congestion,
          potholes, highway construction, or other possible traffic impediments.
          Vehicles can take advantage of the experience of other vehicles on the
          road, without human involvement, and the entire corpus of their
          achieved “experience” is immediately and fully transferable to other
          similarly configured vehicles.
        </p>
      </div>

      <div className="poppost">
        <h1>Popular Post</h1>
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
        </div>
      </div>
    </>
  );
}

export default View;
