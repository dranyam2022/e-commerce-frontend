import React from "react";
import styles from "./ErrorMain.module.css";

const ErrorMain = () => {
  return (
    <div className={styles.container}>
      <h2>An error Occured!</h2>
      <p>We could not find this page!</p>
    </div>
  );
};

export default ErrorMain;
