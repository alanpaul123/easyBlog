import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { homeBlogAPI } from "../services/allAPI";
import ViewCard from "./ViewCard";

function View() {
  const [homeBlogs, setHomeBlogs] = useState([]);
  console.log(homeBlogs);

  useEffect(() => {
    getHomeBlogs();
  }, []);

  const getHomeBlogs = async () => {
    try {
      const result = await homeBlogAPI();
      // console.log(result);

      if (result.status == 200) {
        setHomeBlogs(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="vbox">
        <p className="vi">
          Development <span>16 March 2023</span>
        </p>

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
        <div className="popularboxes">
          {homeBlogs?.length > 0 &&
            homeBlogs?.map((blogs) => (
              <ViewCard displayData={blogs} key={blogs?._id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default View;
