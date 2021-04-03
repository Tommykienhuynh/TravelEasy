import React from "react";
import { SliderFata, SliderDate } from "./sliderData";
import { faArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function carosel() {
  const [current, setCurrent] = useState(0);
  const length = slide.length;
  return (
    <section className="slider">
      {SliderDate}.map
      {(pic, index) => {
        return <img src={pic.image} alt="Japan Img" />;
      }}
    </section>
  );
}
