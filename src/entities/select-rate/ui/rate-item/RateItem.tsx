import React, { FC } from "react";
import { RateTypes } from "@/src/shared/libs/types/rate.types";

interface Props {
  rate: RateTypes;
  sizeLg?: boolean;
}

export const RateItem: FC<Props> = ({ rate, sizeLg }) => {
  return <div></div>;
};
