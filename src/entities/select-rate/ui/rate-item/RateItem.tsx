"use client";

import React, { FC, HTMLAttributes } from "react";
import { RateTypes } from "@/src/shared/libs/types/rate.types";
import { calculateDiscount } from "@/src/entities/select-rate/utils/calculate-discount";
import styles from "./RateItem.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  rate: RateTypes;
  sizeLg?: boolean;
  activeRate: string;
}

export const RateItem: FC<Props> = ({
  rate,
  sizeLg = false,
  activeRate,
  onClick,
}) => {
  const { period, price, full_price, text, is_best, id } = rate;

  const discount = calculateDiscount(full_price, price);

  return (
    <div
      onClick={onClick}
      className={`${styles.RateItem} ${sizeLg ? styles.sizeLg : ""} ${activeRate === id ? styles.activeRate : ""}`}
    >
      <div className={styles.discount}>-{discount}%</div>
      {is_best && <p className={styles.best}>хит!</p>}
      <div className={styles.priceBlock}>
        <p className={styles.timeInterval}>{period}</p>
        <div className={styles.price}>
          <p className={styles.actual}>{price} ₽</p>
          <p className={styles.disPrice}>{full_price} ₽</p>
        </div>
      </div>
      <h3 className={styles.description}>{text}</h3>
    </div>
  );
};
