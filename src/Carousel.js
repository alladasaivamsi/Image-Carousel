import React, { useState } from "react";

import car01 from "./Images/Car01.webp";
import car02 from "./Images/car02.jpeg";
import car03 from "./Images/car03.jpeg";
import car04 from "./Images/car04.jpg";

import "./Carousel.css";

const images = [car01, car02, car03, car04];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <ul>
      <button onClick={prevSlide}>-</button>
      {images.map(
        (item, index) =>
          current === index && (
            <img key={index} src={item} alt="img" className="images" />
          )
      )}
      <button onClick={nextSlide}>+</button>
    </ul>
  );
};

export default Carousel;
