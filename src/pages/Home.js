import React from "react";
import styles from "./Home.module.css";

import HomeContent from "../components/homecontent/HomeContent";

function Home() {
  return (
    <div className={styles.home__container}>
      <HomeContent />
    </div>
  );
}

export default Home;
