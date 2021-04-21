import React, { useState } from "react";

import "../../styles/locations/location.scss";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaDivide,
} from "react-icons/fa";

export default function Carosel({ picData }) {
  console.log(picData);
  const [current, setCurrent] = useState(0);
  const length = picData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(picData) || picData.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <h1> Japan </h1>
      <div className="arrowBTNContainer">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>

      {picData.map((pic, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={pic.image} alt="Japan Img" className="caroImg" />
            )}
          </div>
        );
      })}
    </section>
  );
}
