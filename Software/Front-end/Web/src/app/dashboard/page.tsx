"use client";
import { data } from "@/assets/dataFrameTest";
import { useState } from "react";
import { AreaChart } from "@/components/AreaChart";
import { BigNumbers } from "@/components/BigNumbers";
import { Button } from "@/components/Button";

export default function Dashboard() {
  const [energyData, setEnegyData] = useState({
    labels: data.map((Dia) => Dia.date),
    datasets: [
      {
        label: "Energy Generation",
        data: data.map((value) => value.powerHarvested),
        borderColor: "#0284c7",
        borderWidth: 3,
        pointBorderColor: "#0284c7",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
      },
    ],
  });

  const today = new Date();
  const numberOfDaysToAdd = 3;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd

  return (
    <div className="flex flex-col gap-6  items-center justify-center">
      <div className="flex flex-row  items-center">
        <strong className="text-xl">
          Selecione a data que deseja filtrar para o gráfico abaixo:{" "}
        </strong>
        <input
          type="date"
          className="text-center text-xl"
          value={defaultValue}
        />
        <Button label={"test"} />
      </div>
      <div className="flex flex-row gap-6">
        <BigNumbers title="Total Current" value={25.5} units="mA" key={1} />
        <BigNumbers title="Total Power" value={86.0} units="mW" key={2} />
      </div>

      <div className="w-10/12">
        <AreaChart
          chartData={energyData}
          chartTitle={"Energia X Dia"}
          key={1}
        />
      </div>
    </div>
  );
}
