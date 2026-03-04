"use client";

import React, { useState } from "react";
import styles from "./CheckPolice.module.css";

export const CheckPolice = () => {
  const [checked, setChecked] = useState(true);

  const toggleCheck = () => {
    setChecked((pre) => !pre);
  };

  return (
    <div
      className={`${styles.CheckPolice} ${checked ? styles.confirm : ""}`}
      onClick={toggleCheck}
    >
      <span>
        Я согласен с <a href="#">офертой рекуррентных платежей</a> и{" "}
        <a href="#">Политикой конфиденциальности</a>
      </span>
    </div>
  );
};
