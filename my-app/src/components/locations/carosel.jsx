import React, { useState } from "react";

import "../../styles/locations/location.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Carosel({ picData, locName }) {
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
      <div className="bgOverlay"></div>
      <div className="heroBox">
        <div className="heroText">
          <h1> {locName} </h1>
          <h3> View the resources for this location </h3>
        </div>
        <div className="miniSlide ">
          {picData.map((pic, index) => {
            return (
              <img
                className={
                  index === current ? "miniImg shadow active" : "miniImg shadow"
                }
                src={pic.image}
                key={index}
                alt="Japan Img"
              />
            );
          })}
        </div>
        <div className="arrowBTNContainer">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
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
