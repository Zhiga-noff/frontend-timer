"use client";

import React, { useEffect, useState } from "react";
import styles from "./Tiner.module.css";
import { StarIcon } from "@/src/assets/icons";

export const Timer = () => {
  const [timer, setTimer] = useState(120);
  const [redClass, setRedClass] = useState("");

  useEffect(() => {
    if (timer > 120) {
      setRedClass("yellow");
    }
    if (timer <= 120) {
      setRedClass("red");
    }
    if (timer === 0) {
      setRedClass("");
      return () => {
        clearInterval(interval);
      };
    }
    const interval = setInterval(() => {
      setTimer((pre) => pre - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <header className={styles.Timer}>
      <h3 className={styles.alert}>Успейте открыть пробную неделю</h3>
      <h2
        className={`${styles.countdown} ${redClass === "red" ? styles.red : redClass === "yellow" ? styles.yellow : ""}`}
      >
        <StarIcon />
        <time className={styles.time}>
          <span>
            {Math.floor(timer / 60) < 10
              ? "0" + Math.floor(timer / 60)
              : Math.floor(timer / 60)}
          </span>
          <span>:</span>
          <span>{timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}</span>
        </time>
        <StarIcon />
      </h2>
    </header>
  );
};
