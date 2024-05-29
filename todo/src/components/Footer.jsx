import React from "react";
import styles from "./footer.module.css";

export default function Footer({ completedtodos, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completed Todos :{completedtodos}</span>
      <span className={styles.item}>total Todos :{totaltodos}</span>
    </div>
  );
}
