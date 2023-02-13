import React from "react";
import { useState } from "react";
import { FaCss3 } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { configuringData, monitoringData, featuresImg } from "./data";

const Features = () => {
  const {
    value,
    configuringOrder,
    trackingOrder,
    monitoringOrder,
    imgIndex,
    configuringFun,
    trackingFun,
    monitoringFun,
  } = useGlobalContext();

  return (
    <section className="features-section">
      <div className="feature-header-container">
        <h1>features</h1>
        <p>
          Morbi varius ante quis libero blandit auctor phasellus rhoncus varius
          nulla nec tristique. Vivamus quis placerat nisi. Duis suscipit feugiat
          neque eget bus
        </p>
      </div>

      <div className="features-btn-container">
        <button
          className={`features-btn ${value === 1 && "active-btn"}`}
          onClick={configuringFun}
        >
          configuring
        </button>
        <button
          className={`features-btn ${value === 2 && "active-btn"}`}
          onClick={trackingFun}
        >
          tracking
        </button>
        <button
          className={`features-btn ${value === 3 && "active-btn"}`}
          onClick={monitoringFun}
        >
          monitoring
        </button>
      </div>

      <div className="display-section">
        <div className="configuringData" style={{ order: configuringOrder }}>
          {configuringData.map((item, index) => {
            const { img, text, name } = item;
            return (
              <div
                className={`configuring-item ${
                  configuringOrder === 1 && "change-flex-direction"
                }`}
                key={index}
              >
                <p className="icon">{img}</p>
                <div className="item" key={index}>
                  <h1>{name}</h1>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* image */}
        <div className="feature-img-container" style={{ order: trackingOrder }}>
          <img src={featuresImg[imgIndex]} alt="" className="feature-img" />
        </div>
        {/* monitoring section */}
        <div className="configuringData" style={{ order: monitoringOrder }}>
          {monitoringData.map((item, index) => {
            const { img, text, name } = item;
            return (
              <div className="configuring-item" key={index}>
                <p className="icon">{img}</p>
                <div className="item" key={index}>
                  <h1>{name}</h1>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* end */};
      </div>
    </section>
  );
};

export default Features;
