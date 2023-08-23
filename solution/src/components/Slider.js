import { useState } from "react";
import dataSlider from "../data/dataSlider";
import {
  BsArrowRightCircle as RightArrow,
  BsArrowLeftCircle as LeftArrow,
  BsCircleFill as FilledCircle,
} from "react-icons/bs";

import "./Slider.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    setSlideIndex((prev) => {
      if (prev !== dataSlider.length) {
        return prev + 1;
      } else if (prev === dataSlider.length) {
        return 1;
      }
    });
  }

  function prevSlide() {
    setSlideIndex((prev) => {
      if (prev !== 1) {
        return prev - 1;
      } else if (prev === 1) {
        return dataSlider.length;
      }
    });
  }

  function fillDot(index) {
    setSlideIndex(index);
  }

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={obj.id}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/${index + 1}.png`}
              alt=""
            />
          </div>
        );
      })}
      <LeftArrow
        className="btn-slide prev"
        direction="prev"
        onClick={prevSlide}
      />
      <RightArrow
        className="btn-slide next"
        direction="next"
        onClick={nextSlide}
      />
      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((circle, index) => (
          <FilledCircle
            id="filled-circle"
            key={index}
            onClick={() => fillDot(index + 1)}
            style={
              slideIndex === index + 1
                ? { color: "gray", height: "60%", width: "30%" }
                : { color: "white", height: "60%", width: "30%" }
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
