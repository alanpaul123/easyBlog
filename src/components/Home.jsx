import React from "react";

function Home() {
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
          <button>ReadMore</button>
        </div>
        <div className="homeimg">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
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

          <button>Read More</button>
        </div>
      </div>

      <div className="popularpost">
        <h1>Popular Post</h1>

        <div className="popularboxes">
          <div className="pop">
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

            <a href="#">Read More ...</a>
          </div>

          <div className="pop">
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

            <a href="#">Read More ...</a>
          </div>

          <div className="pop">
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

            <a href="#">Read More ...</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
