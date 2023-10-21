"use client";
import { BarChart } from "@mui/x-charts";

export default function Dashboard() {
  return (
    <div>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={900}
        height={300}
      />
    </div>
  );
}
