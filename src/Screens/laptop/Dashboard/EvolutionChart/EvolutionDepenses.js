/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { APP_COLORS } from "../../../../Styling/Colors";
import Spinner from "../../../Shared/Spinner";


export default function EvolutionDepenses({ isMobile = false, datasets = [], customTitle = "", legend = "" }) {
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
  }, []);

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
          type: "line",
          label: "",
          borderColor: `rgba(0, 31, 63, 0.2)`,
          borderWidth: 2,
          fill: false,
          data: count,
        },
        {
          type: "bar",
          label: "",
          backgroundColor: `rgb(0, 31, 63)`,
          data: count,
          borderColor: `${APP_COLORS.YELLOW_COLOR.color}`,
          borderWidth: 2,
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
      {isLoading ? <Spinner /> : <Bar data={formatedData} options={options} />}
    </>
  );
}
