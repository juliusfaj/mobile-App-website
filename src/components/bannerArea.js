import React from "react";
import headerImg from "../images/header-smartphones.png";
import { useGlobalContext } from "../context";

const BannerArea = () => {
  const { title } = useGlobalContext();

  return (
    <div className="banner-area">
      <div className="desc-container">
        <p className="desc">
          mobile app for <span>{title}</span>
        </p>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          possimus harum inventore unde dicta, dolore aperiam!
        </p>
        <div className="btn-container">
          <button>For apple</button>
          <button>for android</button>
        </div>
      </div>
      <div className="phone">
        <img src={headerImg} alt="headerImg" />
      </div>
    </div>
  );
};

export default BannerArea;
