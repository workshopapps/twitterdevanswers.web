import React from "react";
import myImage from "./images/Frame 1000003755.png";
import "./App.css";

const App = () => {
  return (
    <div className="main-wrap">
      <div className="detail-image">
        <div className="h1-p-btn-div">
          <h1>
            You want to target
            <br />
            <span>developers </span>right?
          </h1>
          If you want to target devlopers you are in the right place to post
          your
          <br />
          ads. DevAsk puts your brand in the faces of thousands of developers to
          <br />
          boost your ad conversion.
          <br />
          <button>Get started</button>
        </div>
        <div className="Image-div">
          <img src={myImage} alt="Mentor-Image" />
        </div>
      </div>
      <div className="mid-page">
        <h3 className="mid-des">What can we do for you?</h3>
        <div className="mid-3boxes">
          <div className="midbox">
            <h4>Build brand awareness</h4>
            <p>
              Become popular in your niche and increase brand recognition,
              trustworthiness, and credibility.
            </p>
          </div>
          <div className="midbox">
            <h4>Target & convert leads</h4>
            <p>
              Influence high-intent prospects searching for solutions during
              their consideration phase.
            </p>
          </div>
          <div className="midbox">
            <h4>Increase your website traffic</h4>
            <p>
              Promote marketing content, drive traffic to your tech-related
              website, and boost conversions.
            </p>
          </div>
        </div>
        <div>
          {" "}
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default App;
