import React from "react";
import { FaPlay } from "react-icons/fa";
import videoFrame from "../images/video-frame.jpg";

const Preview = () => {
  return (
    <div className="preview-section">
      <div className="feature-header-container">
        <h1>preview</h1>
        <p>
          Morbi varius ante quis libero blandit auctor phasellus rhoncus varius
          nulla nec tristique. Vivamus quis placerat nisi. Duis suscipit feugiat
          neque eget bus
        </p>
      </div>
      <div className="preview-video-container">
        <img src={videoFrame} alt="preview video" />
        <button className="play-btn">
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default Preview;
