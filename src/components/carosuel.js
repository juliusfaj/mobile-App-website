import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.css";
import { carosuelData } from "./data";

const Carosuels = () => {
  return (
    <Carousel showArrows={true}>
      {carosuelData.map((item, index) => {
        return (
          <div>
            <img src={item} alt="images" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Carosuels;
