import React from "react";
import FlashSale from "../flashsale/FlashSale";
import Carousel from "./Carousel";
import styles from "./HomeContent.module.css";
import { SliderData } from "./SliderData";

function HomeContent() {
  return (
    <section className={styles.homecontent__container}>
      <div className={styles.homecontent__first}>
        <FlashSale />
      </div>
      <div className={styles.homecontent__second}>
        <Carousel slides={SliderData} />
      </div>
    </section>
  );
}

export default HomeContent;
