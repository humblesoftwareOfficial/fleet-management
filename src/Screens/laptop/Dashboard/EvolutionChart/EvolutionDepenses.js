import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
});

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
};

export default function EvolutionDepenses ({isMobile = false}) {
  const [data, setData] = useState(genData());
  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="header">
        {isMobile ? <h3 className="title">Dépenses de la semaine</h3> : <h1 className="title">Dépenses de la semaine</h1>}
      </div>
      <Bar data={data} options={options} />
    </>
  );
};
