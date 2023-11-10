"use client";
import { useEffect, useState } from "react";
import { AreaChart } from "@/components/AreaChart";
import { BigNumbers } from "@/components/BigNumbers";
import { Button } from "@/components/Button";
import { iLogs, iResponseLogs } from "@/interfaces/iLogs";

export default function Dashboard() {
  const [apiData, setApiData] = useState<iLogs[]>();
  const [energyData, setEnergyData] = useState();

  useEffect(() => {
    const fetchLogs = async () => {
      const res = await fetch("http://localhost:3333/logs");
      const data: iResponseLogs = await res.json();

      setApiData(data.logs);
    };
    fetchLogs();
  }, []);

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

            setEnergyData({
              labels: apiData
                ?.map((log) => {
                  const date = log.register_time || "";
                  const dateFormated = date.substring(0, 10);
                  const hour = date.substring(11, 16).replace("Z", "");

                  console.log(
                    `DateFormated: ${dateFormated} | DateFilterValue: ${dateFilteredValue}`
                  );

                  if (dateFormated === dateFilteredValue) {
                    return hour;
                  }
                })
                .sort()
                .filter((n) => n),
              datasets: [
                {
                  label: "Energy Generation",
                  data: apiData
                    ?.map((log) => {
                      const date = log.register_time || "";
                      const dateFormated = date.substring(0, 10);
                      if (dateFormated === dateFilteredValue) {
                        return log.power;
                      }
                    })
                    .filter((n) => n),
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
              },
            });
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
        <BigNumbers title="Total Power" value={86.0} units="kW/H" key={2} />
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
