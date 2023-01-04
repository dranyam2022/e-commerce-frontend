import React from "react";
import Carousel from "./Carousel";
import styles from "./HomeContent.module.css";
import { SliderData } from "./SliderData";

function HomeContent() {
  return (
    <section className={styles.homecontent__container}>
      <Carousel slides={SliderData} />
    </section>
  );
}

export default HomeContent;
