import React, { useState } from "react";
import styles from "./Carousel.module.css";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderData } from "./SliderData";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const handlerLeft = () => {
    if (current === 0) {
      setCurrent((prevState) => prevState + length - 1);
    } else {
      setCurrent((prevState) => prevState - 1);
    }
  };
  const handlerRight = () => {
    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent((prevState) => prevState + 1);
    }
  };

  console.log(current);
  return (
    <div className={styles.container}>
      <FaArrowAltCircleLeft
        className={styles["left-arrow"]}
        onClick={handlerLeft}
      />
      <FaArrowAltCircleRight
        className={styles["right-arrow"]}
        onClick={handlerRight}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${styles.active} ${styles.slide}`
                : styles.slide
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className={styles.image}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
