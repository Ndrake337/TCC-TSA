import { Line } from "react-chartjs-2";
import "chart.js/auto";

export function BarChart({ chartData }) {
  return <Line data={chartData} />;
}
