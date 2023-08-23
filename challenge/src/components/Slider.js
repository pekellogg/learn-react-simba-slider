// hint: you'll need react's useState hook
import { useState } from "react";

import dataSlider from "../data/dataSlider";

// react-icons provides left/right arrows and the circles to indicate current slide to the user
// hint: these icons can be referred to with component syntax, e.g. ->
// < RightArrow />
// < LeftArrow />
// < FilledCircle />
import {
  BsArrowRightCircle as RightArrow,
  BsArrowLeftCircle as LeftArrow,
  BsCircleFill as FilledCircle,
} from "react-icons/bs";

import "./Slider.css";

function Slider() {
  function nextSlide() {
    // add your logic
  }

  function prevSlide() {
    // add your logic
  }

  function fillDot(index) {
    setSlideIndex(index);
  }
  return (
    <div className="container-slider">
      {/* we'll need to map over dataSlider here */}
      <LeftArrow
        className="btn-slide prev"
        onClick={prevSlide}
      />
      <RightArrow
        className="btn-slide next"
        onClick={nextSlide}
      />
      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((circle, index) => (
          <FilledCircle
            key={index}
            onClick={() => fillDot(index + 1)}
            style={{
              color: slideIndex === index + 1 ? "gray" : "white",
              height: "60%",
              width: "30%",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
