import React from "react";
import { useState } from "react";
import firstDetails from "../images/details-1.png";
import secondDetails from "../images/details-2.png";
import { useGlobalContext } from "../context";

const Help = () => {
  const { openModal } = useGlobalContext();

  return (
    <div className="help-section">
      <div className="help-section-item">
        <div className="help-img-container">
          <img src={firstDetails} alt="modal" />
        </div>
        <div className="help-desc-container">
          <h4>Start using Leno today and set your long term goals</h4>
          <p>
            Ac ante ipsum primis in faucibus. Nam et porttitor ipsum. Morbi eros
            augue, blandit in varius gravida tempor a massa. Curabitur ante
            dolor euismod a arcu nec pellentque
          </p>
          <button onClick={openModal}>modal</button>
        </div>
      </div>

      {/* second part */}
      <div className="help-section-item inverse">
        <div className="help-img-container">
          <img src={secondDetails} alt="detail" />
        </div>
        <div className="help-desc-container">
          <h4>The calendar feature helps you schedule tasks</h4>
          <p>
            Morbi blandit felis at pharetra facilisis. Nullam nec felis eget
            lectus consequat rutrum. Suspendisse felis elit, interdum at eros
            eget facilisis tempor vestibulum sit amet mattis
          </p>
          <button>details</button>
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default Help;
