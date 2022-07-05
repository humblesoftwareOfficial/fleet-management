/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Spinner from "../../../Shared/Spinner";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieResults({
  isMobile = false,
  datasets = [],
  customTitle = "",
  legend = "",
}) {
  const [formatedData, setFormatedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    const colors = [];
    for (let i = 0; i < datasets?.length; i++) {
      usedLabels.push(datasets[i]?.political_alliance?.name || "");
      count.push(datasets[i]?.count || 0);
      colors.push(datasets[i]?.political_alliance?.color);
    }
    setFormatedData({
      labels: usedLabels,
      datasets: [
        {
          label: "# of Votes",
          data: count,
          backgroundColor: colors,
          borderWidth: 1,
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
      {isLoading ? <Spinner /> : <Pie data={formatedData} />}
    </>
  );
}
