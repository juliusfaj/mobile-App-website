import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.svg";
import BigNav from "./bignav";
import { useGlobalContext } from "../context";
import BannerArea from "./bannerArea";

const Banner = () => {
  const [addColor, setAddColor] = useState(false);
  const [navHeight, setNavHeight] = useState("");
  const getHeight = useRef(null);

  const getIt = () => {
    const getNavHeight = getHeight.current.getBoundingClientRect().height;

    setNavHeight(getNavHeight);
  };

  window.addEventListener("scroll", (e) => {
    const high = window.pageYOffset;

    if (high > navHeight) {
      setAddColor(true);
    } else {
      setAddColor(false);
    }
  });

  const {
    drop,
    showDrop,
    hideDrop,
    showOptions,
    handleNavToggle,
    handleScroll,
    toggleDrop,
  } = useGlobalContext();

  useEffect(() => {
    getIt();
  }, []);

  return (
    <div className="banner">
      <nav className={!addColor ? "nav" : "nav navBig"} ref={getHeight}>
        <div className="small-nav">
          <img src={logo} alt="leno logo" className="nav-logo" />
          <button className="nav-btn" onClick={handleNavToggle}>
            <FaBars />
          </button>
        </div>

        <BigNav />
      </nav>
      <div
        className={
          !showOptions ? "nav-options" : "nav-options show-nav-options "
        }
      >
        <button className="nav-options-btn" id="home">
          home
        </button>
        <button className="nav-options-btn">article</button>
        <button className="nav-options-btn">features</button>
        <button className="nav-options-btn">pricing</button>
        <button
          className="nav-options-btn btn-drop"
          onMouseOver={showDrop}
          onMouseOut={hideDrop}
          onClick={toggleDrop}
        >
          drop ˅
        </button>
        <div
          className={!drop ? "drop" : "drop show-drop"}
          onMouseOver={showDrop}
          onMouseOut={hideDrop}
        >
          <button className="nav-options-btn">article details</button>
          <div>
            <button className="nav-options-btn">terms condition</button>
          </div>
          <button className="nav-options-btn">privacy policy</button>
        </div>
        <button className="nav-options-btn">contact</button>
      </div>
      <div className="banner-showcase"></div>

      <BannerArea />
    </div>
  );
};

export default Banner;
