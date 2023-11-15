"use client";
import { useEffect, useState } from "react";
import { AreaChart } from "@/components/AreaChart";
import { BigNumbers } from "@/components/BigNumbers";
import { Button } from "@/components/Button";
import { iLogs, iResponseLogs } from "@/interfaces/iLogs";

export default function Dashboard() {
  const [energyData, setEnergyData] = useState();
  const [bigNumberValue, setBigNumberValue] = useState<number | undefined>(0);
  const [hoursOnGeneration, setHoursOnGeneration] = useState<
    number | undefined
  >(0);

  async function fetchDataOnSubmitDashboard(dateToFilter) {
    const res = await fetch(
      `https://tcc-tsa-api.onrender.com/dashboard?dateToFilter=${dateToFilter}`
    );
    const data: iResponseLogs = await res.json();

    const apiData: iLogs[] = data.logs;

    apiData?.sort((a, b) => {
      return new Date(a.register_time) - new Date(b.register_time);
    });
    setEnergyData({
      labels: apiData?.map((log) => {
        const date = log.register_time || "";
        const hour = date.substring(11, 16).replace("Z", "");
        if (
          apiData.indexOf(log) % 5 === 0 ||
          apiData.indexOf(log) === apiData.length - 1
        ) {
          return hour;
        }
        return "";
      }),
      datasets: [
        {
          label: "Energy Generation",
          data: apiData?.map((log) => {
            return log.power;
          }),
          borderColor: "#0284c7",
          borderWidth: 3,
          pointBorderColor: "#0284c7",
          pointBorderWidth: 3,
          tension: 0.5,
          fill: true,
        },
      ],
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: {
            ticks: {
              maxTicksLimit: 5,
            },
          },
        },
      },
    });
    setBigNumberValue(
      apiData?.reduce((acc, log) => {
        acc += log.power;
        return (acc / apiData.length) * 24;
      }, 0)
    );
  }

  return (
    <div className="flex flex-col w-full  h-full gap-6 items-center justify-center">
      <div className="flex lg:flex-row max-lg:flex-col items-center max-lg:gap-3">
        <strong className="lg:text-xl">
          Selecione a data que deseja filtrar para o gráfico abaixo:{" "}
        </strong>
        <form
          className="flex flex-row justify-center gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            let dateFilteredValue = event.target.dateFilter.value;
            fetchDataOnSubmitDashboard(dateFilteredValue);
          }}
        >
          <input
            type="date"
            name="dateFilter"
            className="text-center text-xl"
          />
          <button
            className="rounded-lg border-solid border-2 px-3 border-cyan-900"
            type="submit"
          >
            Filtrar
          </button>
        </form>
      </div>
      <div className="flex flex-row gap-6 flex-wrap">
        <BigNumbers
          title="Energia Gerada"
          value={bigNumberValue?.toFixed(2)}
          units="mWh/dia"
          key={2}
        />
      </div>

      <div className="max-lg:w-full max-lg:h-full lg:w-10/12 ">
        {energyData ? (
          <AreaChart
            chartData={energyData}
            chartTitle={"Energia X Dia"}
            key={1}
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            Realize o filtro de datas para começar
          </div>
        )}
      </div>
    </div>
  );
}
