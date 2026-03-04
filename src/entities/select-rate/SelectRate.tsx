import React, { FC } from "react";
import Image from "next/image";
import manImg from "@/src/assets/img/man-img.png";
import styles from "./SelectRate.module.css";
import { RateTypes } from "@/src/shared/libs/types/rate.types";
import { RateItem } from "@/src/entities/select-rate/ui";
import { Button } from "@/src/shared/ui";
import { CheckPolice } from "@/src/entities/select-rate/ui/check-police/CheckPolice";

interface Props {
  rates: RateTypes[];
}

export const SelectRate: FC<Props> = ({ rates }) => {
  return (
    <section className={styles.SelectRate}>
      <div className={styles.image}>
        <Image
          src={manImg.src}
          alt={"Сильный накаченный мужчина"}
          fill={true}
        />
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.rates}>
          {rates.reverse().map((rate, index) => {
            return <RateItem key={rate.id} rate={rate} sizeLg={index === 0} />;
          })}
        </div>
        <h4 className={styles.anatation}>
          <span>!</span>Следуя плану на 3 месяца и более, люди получают в 2 раза
          лучший результат, чем за 1 месяц
        </h4>
        <CheckPolice />
        <Button className={styles.btn}>Купить</Button>
        <small className={styles.small}>
          Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
          денежных средств для получения пожизненного доступа к приложению.
          Пользователь соглашается, что данные кредитной/дебетовой карты будут
          сохранены для осуществления покупок дополнительных услуг сервиса в
          случае желания пользователя.
        </small>
      </div>
    </section>
  );
};
