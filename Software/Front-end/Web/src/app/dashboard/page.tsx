"use client";
import { data } from "@/assets/dataFrameTest";
import { useState } from "react";
import { BarChart } from "@/components/BarChart";

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

  return (
    <main className="flex flex-col w-full h-fit flex-wrap items-center">
      <div className="w- full shadow-lg rounded flex flex-col items-center p-4 grow basis-full">
        <strong>Titulo do Gráfico</strong>
        <BarChart chartData={energyData} />
      </div>
    </main>
  );
}
