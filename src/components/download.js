import React from "react";
import downloadImg from "../images/download.png";

const Download = () => {
  return (
    <div className="download-section">
      <div className="download-container">
        <div className="download-desc">
          <p>
            Download Leno today to see the benefits and enjoy the results faster
            than any other app out there
          </p>
          <div className="btn-container">
            <button>For apple</button>
            <button>for android</button>
          </div>
        </div>
        <div className="download-img">
          <img src={downloadImg} alt="downloadImage" />
        </div>
      </div>
    </div>
  );
};

export default Download;
