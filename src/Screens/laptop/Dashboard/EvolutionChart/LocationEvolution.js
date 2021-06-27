import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  datasets: [
    {
      label: "par jour",
      data: [12, 19, 3, 5, 2, 3, 6],
      fill: false,
      backgroundColor: "rgb(0, 31, 63)",
      borderColor: "rgba(0, 31, 63, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Locations de véhicules de la semaine en cours.",
    },
  }
};

export default function LocationEvolution() {
  return (
    <>
      <div className="header">
        <h1 className="title">Locations de la semaine</h1>
      </div>
      <Line data={data} options={options}/>
    </>
  );
}
