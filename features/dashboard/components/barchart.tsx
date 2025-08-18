"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";
import { SalesOverviewDataType } from "../type";
ChartJS.register(CategoryScale, LinearScale, BarElement);

type BarChartProps = {
  data: SalesOverviewDataType;
};

export default function BarChart({ data }: BarChartProps) {
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
