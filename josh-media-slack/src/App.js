import React from "react";
import myImage from "./images/Frame 1000003755.png";
import "./App.css";

const App = () => {
  return (
    <div className="main-wrap">
      <div className="detail-image">
        <div className="h1-p-btn-div">
          <p>
            <h1>
              You want to target
              <br />
              developers right?
            </h1>
            If you want to target devlopers you are in the right place to post
            your
            <br />
            ads. DevAsk puts your brand in the faces of thousands of developers
            to
            <br />
            boost your ad conversion.
            <br />
            <button>Get started</button>
          </p>
        </div>
        <div className="Image-div">
          <img src={myImage} alt="Mentor-Image" />
        </div>
      </div>
    </div>
  );
};

export default App;
