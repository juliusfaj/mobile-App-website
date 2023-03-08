import React from "react";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import modalImg from "../images/details-modal.jpg";
import { modalData } from "./data";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { closeModal, showModal } = useGlobalContext();
  return (
    <div
      className={!showModal ? "modal-container" : "modal-container show-modal"}
    >
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <div className="modal-cont">
          <div className="modal-img-container">
            <img src={modalImg} alt="modalImg" />
          </div>
          <div className="modal-desc-container">
            <div className="goal-container">
              <h1>goals setting</h1>
              <hr />
              <p>
                In gravida at nunc sodales pretium. Vivamus semper, odio vitae
                mattis auctor, elit elit semper magna ac tum nico vela spider
              </p>
            </div>
            <div className="feedback-container">
              <h1>user feedback</h1>
              <p className="feedback-desc">
                Sapien vitae eros. Praesent ut erat a tellus posuere nisi more
                thico cursus pharetra finibus posuere nisi. Vivamus feugiat
              </p>
              <div className="list">
                {modalData.map((item, index) => {
                  return (
                    <div key={index}>
                      <FaChevronRight />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-btn-container">
              <button>details</button>
              <button onClick={closeModal}>close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
