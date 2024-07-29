import React, { useEffect, useState } from "react";
import { homeBlogAPI } from "../services/allAPI";
import SERVERURL from "../services/serverurl";
import ViewCard from "./ViewCard";
import { Link } from "react-router-dom";

function Home() {
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
      <div className="home">
        <div className="homep">
          <p>Featured Post</p>
          <h1>
            How Ai will <br /> Change the future
          </h1>
          <p>
            The future of Ai will see home robots having enhanced <br />
            intelligence,increased capabilities, and becoming more <br />
            personal and possible cute.For example ,home robots will overcome
            navigation,direction
          </p>
          {sessionStorage.getItem("token") ? (
            <Link className="btn btn-primary aread" to={"view-blog"}>
              ReadMore
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="homeimg">
          {/* <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
            alt=""
          /> */}

          <img
            src="https://www.zabala.eu/wp-content/uploads/2023/11/Artificial-intelligente-and-consultancy-450x253.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="hero">
        <div className="box">
          <img
            src="https://miro.medium.com/v2/resize:fit:704/1*tLlCJHpWt-YbJaAX4W_KLg.png"
            alt=""
          />
        </div>

        <div className="herodesc">
          <p>
            <span className="">Development</span> 16 March 2023
          </p>
          <h1>
            How to make game more attractive with <br />
            VR and Ai technology
          </h1>

          <p>
            Google has been investing in AI for many yars and bringing its
            benifits to individuals and <br /> communities.Wheather it's
            publishing state of the art research,building helpful products or
            developing tools <br />
            that makes life easier.
          </p>

          {sessionStorage.getItem("token") ? (
            <Link to={"view-blog"} className="btn btn-danger bdan m-2 ">
              Read More
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>

      {sessionStorage.getItem("token") ? (
        <div className="popularpost">
          <h1>Popular Post</h1>

          <div className="popularboxes">
            {homeBlogs?.length > 0 &&
              homeBlogs?.map((blogs) => (
                <ViewCard displayData={blogs} key={blogs?._id} />
              ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
