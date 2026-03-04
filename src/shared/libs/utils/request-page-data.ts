import {
  BASE_URL,
  MODIFICATION_URL,
} from "@/src/shared/libs/constants/api-paths";
import { RateTypes } from "@/src/shared/libs/types/rate.types";

export const requestPageData = async (url: string = "") => {
  return fetch(`${BASE_URL}${MODIFICATION_URL}${url}`, { cache: "no-store" })
    .then((res) => {
      return <RateTypes[]>(<unknown>res.json());
    })
    .then((res) => {
      return res;
    })
    .catch((originalError) => {
      throw new Error(
        `Ошибка при запросе к ${BASE_URL}${MODIFICATION_URL}${url} : ${originalError.message}`,
        {
          cause: originalError,
        },
      );
    });
};
