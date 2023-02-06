import React, { useState } from "react";
import { useEffect } from "react";
import FlashItem from "./FlashItem";
import styles from "./FlashSale.module.css";

const FlashSale = () => {
  const [hour, setHour] = useState(1);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(59);
  const [isFlash, setIsFlash] = useState(true);

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (hour > 0 || min > 0 || sec > 0) {
        if (sec === 0) {
          setSec(59);
          if (min > 0) {
            setMin((prev) => prev - 1);
          } else {
            setHour((prev) => prev - 1);
            setMin(59);
          }
        } else {
          setSec((prev) => prev - 1);
        }
      } else {
        setIsFlash(false);
      }
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [sec, min, hour]);

  return (
    <section className={styles.container}>
      <div className={styles.flash__container}>
        <h3>Flash Sale</h3>
        <h3>Ending in:</h3>
        <span>{hour >= 10 ? hour : `0${hour}`}</span>
        <span>:</span>
        <span>{min >= 10 ? min : `0${min}`}</span>
        <span>:</span>
        <span>{sec >= 10 ? sec : `0${sec}`}</span>
      </div>
      <div className={styles.item__container}>
        <div className={styles.item}>Flash Item</div>
      </div>
    </section>
  );
};

export default FlashSale;
