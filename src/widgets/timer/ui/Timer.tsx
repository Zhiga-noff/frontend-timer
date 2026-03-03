import React from "react";
import styles from "./Tiner.module.css";
import { StarIcon } from "@/src/assets/icons";

export const Timer = () => {
  return (
    <header className={styles.Timer}>
      <h3 className={styles.alert}>Успейте открыть пробную неделю</h3>
      <h2 className={styles.countdown}>
        <StarIcon />
        <span>00</span>
        <span>:</span>
        <span>00</span>
      </h2>
    </header>
  );
};
