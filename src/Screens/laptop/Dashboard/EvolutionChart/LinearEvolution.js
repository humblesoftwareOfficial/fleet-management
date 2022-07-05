/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Spinner from "../../../Shared/Spinner";


export default function LinearEvolution({ isMobile = false, datasets = [], customTitle = "", legend = "" }) {
  const [formatedData, setFormatedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        display: false,
      },
      title: {
        display: true,
        text: customTitle,
      },
    },
  };

  useEffect(() => {
    formatLabels();
  }, [datasets]);

  useEffect(() => {
    if (formatedData) {

      setIsLoading(false);
    }
  }, [formatedData]);

  const formatLabels = () => {
    const usedLabels = [];
    const count = [];
    for (let i = 0; i < datasets?.length; i++) {
      usedLabels.push(datasets[i]?.political_alliance?.name || "");
      count.push(datasets[i]?.count || 0);
    }
    setFormatedData({
      labels: usedLabels,
      datasets: [
        {
          label: "Nombre de voix",
          data: count,
          fill: false,
          backgroundColor: "rgb(0, 31, 63)",
          borderColor: "rgba(0, 31, 63, 0.2)",
        },
      ],
    });
  };

  return (
    <>
      <div className="header">
        {isMobile ? (
          <h3 className="title">{legend}</h3>
        ) : (
          <h1 className="title">{legend}</h1>
        )}
      </div>
      {isLoading ? <Spinner /> : <Line data={formatedData} options={options} />}
    </>
  );
}

// const data = {
//   labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
//   datasets: [
//     {
//       label: "par jour",
//       data: [12, 19, 3, 5, 2, 3, 6],
//       fill: false,
//       backgroundColor: "rgb(0, 31, 63)",
//       borderColor: "rgba(0, 31, 63, 0.2)",
//     },
//   ],
// };
