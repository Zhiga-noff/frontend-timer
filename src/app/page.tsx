import type { Metadata } from "next";
import { SelectRate } from "@/src/entities";
import { requestPageData } from "@/src/shared/libs/utils";
import { GET_RATES } from "@/src/shared/libs/constants/api-paths";

export const metadata: Metadata = {
  title: "Феноменальная акция",
  description: "Выбери подходящий для себя тариф",
};

export default async function MainPage() {
  const rates = await requestPageData(GET_RATES);
  // const rates = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs");

  return (
    <main className={"container"}>
      <h1 className={"title"}>
        Выбери подходящий для себя <span>тариф</span>
      </h1>
      <SelectRate rates={rates} />
    </main>
  );
}
