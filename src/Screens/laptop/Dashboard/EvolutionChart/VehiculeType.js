import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["4x4", "Berline", "Caddy", "Mercedes", "Maybach", "Pick up"],
  datasets: [
    {
      label: "type vehicule",
      data: [12, 19, 3, 5, 2, 3, 4],
      backgroundColor: [
        "rgba(10, 85, 240, 0.2)",
        "rgba(240, 165, 10, 0.2)",
        "rgba(10, 240, 103, 0.2)",
        "rgba(240, 10, 123, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(10, 238, 240, 0.2)",
      ],
      borderColor: [
        "rgba(10, 85, 240, 1)",
        "rgba(240, 165, 10, 1)",
        "rgba(10, 240, 103, 1)",
        "rgba(240, 10, 123, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(10, 238, 240, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Type de véhicules dans mon parc.",
    },
  },
};

export default function VehiculeType({isMobile = false}) {
  return (
    <>
      <div className="header">
      {isMobile ? <h3 className="title">Type de véhicules</h3> : <h1 className="title">Type de véhicules</h1>}
      </div>
      <Bar data={data} options={options} />
    </>
  );
}
