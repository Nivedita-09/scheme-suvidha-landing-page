import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";
import { chartColors } from "./colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  legend: {
    display: false,
    position: "right",
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};
const data = {
  maintainAspectRatio: false,

  responsive: false,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors,
    },
  ],
};
export default function AnalysisInfo() {
  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}
