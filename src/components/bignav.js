import React from "react";
import { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

import logo from "../images/logo.svg";

const BigNav = () => {
  const { handleScroll, drop, showDrop, hideDrop } = useGlobalContext();
  const obj = useRef(null);

  return (
    <div className="bignav">
      <img src={logo} alt="logo" className="nav-logo" />
      <div className="bignav-oppting">
        <button className="nav-options-btn" id="home">
          home
        </button>
        <button className="nav-options-btn">article</button>
        <button className="nav-options-btn">features</button>
        <button className="nav-options-btn">pricing</button>
        <div>
          <button
            className="nav-options-btn"
            onMouseOver={showDrop}
            onMouseOut={hideDrop}
          >
            drop ˅
          </button>

          <div
            className={!drop ? "bignavDrop" : "bignavDrop showBignavDrop"}
            onMouseOver={showDrop}
            onMouseOut={hideDrop}
          >
            <button className="nav-options-btn">article details</button>
            <div>
              <button className="nav-options-btn">terms condition</button>
            </div>
            <button className="nav-options-btn">privacy policy</button>
          </div>
        </div>
        <button className="nav-options-btn">contact</button>
      </div>
    </div>
  );
};

export default BigNav;
