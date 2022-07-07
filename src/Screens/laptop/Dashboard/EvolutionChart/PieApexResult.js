import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Spinner from "../../../Shared/Spinner";

const series = [25, 15, 44, 55, 41, 17];

const PieApexResult = ({
  isMobile = false,
  datasets = [],
  customTitle = "",
  legend = "",
}) => {
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
      series: count,
      options: {
        chart: {
          width: "100%",
          type: "pie",
        },
        labels: usedLabels,
        theme: {
          monochrome: {
            enabled: false,
          },
        },
        plotOptions: {
          pie: {
            distributed: true,
            dataLabels: {
              offset: -5,
            },
          },
        },
        title: {
          text: customTitle,
        },
        colors,
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + "%"];
          },
        },
        legend: {
          show: false,
        },
      },
    });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="chart">
          <ReactApexChart
            options={formatedData?.options}
            series={formatedData?.series}
            type="pie"
          />
        </div>
      )}
    </>
  );
};

export default PieApexResult;
