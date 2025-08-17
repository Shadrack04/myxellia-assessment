"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";
import { SalesOverviewDataType } from "../type";
ChartJS.register(CategoryScale, LinearScale, BarElement);

type BarChartProps = {
  data: SalesOverviewDataType;
};

export default function BarChart({ data }: BarChartProps) {
  // const data = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  //   datasets: [
  //     {
  //       data: [12000, 19000, 3000, 5000, 2000, 30000, 5000, 30000, 24000],
  //       backgroundColor: "#4545FE",
  //       barPercentage: 0.6,
  //       categoryPercentage: 0.8,
  //     },
  //     {
  //       data: [8000, 14000, 2000, 4000, 1000, 25000, 23000, 20000, 6000],
  //       backgroundColor: "#12B76A",
  //       barPercentage: 0.6,
  //       categoryPercentage: 0.8,
  //     },
  //     {
  //       data: [8000, 14000, 2000, 4000, 1000, 25000, 14500, 23800, 5630],
  //       backgroundColor: "#F04438",
  //       barPercentage: 0.6,
  //       categoryPercentage: 0.8,
  //     },
  //   ],
  // };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#919191",
          font: {
            size: 10,
          },
        },

        title: {
          color: "#919191",
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#919191",
          font: {
            size: 10,
          },
        },
        title: {
          color: "#919191",
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
