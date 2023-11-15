import { Line } from "react-chartjs-2";
import "chart.js/auto";

export function AreaChart({ chartData, chartTitle }: any) {
  return (
    <div className="flex flex-col items-center p-6 shadow-lg rounded-lg">
      <strong className="text-xl">{chartTitle}</strong>
      <Line data={chartData} />
    </div>
  );
}
