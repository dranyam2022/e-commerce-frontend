import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderData } from "./SliderData";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prevState) => {
        if (prevState >= length - 1) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 3000);
  }, [length]);

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

  const classes = styles.image_container;

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
      <div className={styles.main__container}>
        <div className={styles.dots__container}>{}</div>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${styles.active} ${styles.slide} ${classes}`
                : `${styles.slide} ${classes}`
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
