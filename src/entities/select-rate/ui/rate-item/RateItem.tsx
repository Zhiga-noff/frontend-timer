"use client";

import React, { FC, useState } from "react";
import { RateTypes } from "@/src/shared/libs/types/rate.types";
import { calculateDiscount } from "@/src/entities/select-rate/utils/calculate-discount";
import styles from "./RateItem.module.css";

interface Props {
  rate: RateTypes;
  sizeLg?: boolean;
}

export const RateItem: FC<Props> = ({ rate, sizeLg = false }) => {
  const [activeRate, setActiveRate] = useState<boolean>(sizeLg);
  const { period, price, full_price, text, is_best } = rate;

  const discount = calculateDiscount(full_price, price);

  return (
    <div className={`${styles.RateItem} ${sizeLg ? styles.sizeLg : ""}`}>
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
