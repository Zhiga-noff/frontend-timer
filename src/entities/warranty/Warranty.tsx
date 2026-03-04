import React from "react";
import styles from "./Warranty.module.css";

export const Warranty = () => {
  return (
    <section className={styles.Warranty}>
      <h4 className={styles.bage}>гарантия возврата 30 дней</h4>
      <p className={styles.text}>
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые
        результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
        деньги в течение 30 дней с момента покупки, если ты не получишь видимых
        результатов.
      </p>
    </section>
  );
};
