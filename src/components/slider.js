import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const Slider = () => {
  const { sliderData, number, setNumber, addNumber, subNumber } =
    useGlobalContext();

  // const screenSize = window.screenX;
  // console.log(screenSize);

  useEffect(() => {
    const interval = setInterval(() => {
      // setNum(num + 1);
      if (number <= sliderData.length - 1) {
        setNumber(number + 1);

        // console.log(num);
      } else {
        setNumber(1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <section className="slider-container">
      {sliderData.map((item, index) => {
        const { id, img, text, name, role } = item;
        let slide = "next-slide ";

        if (id === number) {
          slide = "current-slide";
        }
        if (
          id == number - 1 ||
          (number === 1 && id === sliderData.length - 1)
        ) {
          slide = "previous-slide";
        }

        return (
          <div className={`slider-item ${slide}`} key={id}>
            <img src={img} alt={name} />
            <p className="text">{text}</p>
            <p className="name">
              {name}-{role}
            </p>
          </div>
        );
      })}
      <div className="buttons">
        <button onClick={subNumber}>
          <FaChevronLeft />
        </button>
        <button onClick={addNumber}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
