import React, { useEffect, useState } from "react";

import ReactApexChart from "react-apexcharts";
import { APP_COLORS } from "../../../../Styling/Colors";
import Spinner from "../../../Shared/Spinner";

const ColumnChart = ({
  isMobile = false,
  datasets = [],
  datasetsObject,
  customTitle = "",
  legend = "",
  forRecapVoters,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [formatedData, setFormatedData] = useState(null);

  useEffect(() => {
    if (forRecapVoters) {
      recapVoters();
    } else {
      formatLabels();
    }
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
      series: [
        {
          label: "",
          data: count,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 10,
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => {
            return val + "";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },

        xaxis: {
          categories: usedLabels,
          position: "bottom",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: (val) => {
              return val + " voix";
            },
          },
        },
        colors,
        title: {
          text: customTitle,
          floating: true,
          offsetY: 0,
          align: "center",
          style: {
            color: "#444",
          },
        },
      },
    });
  };

  const recapVoters = () => {
    const colors = [
      "#F5F4F4",
      APP_COLORS.GREEN_COLOR.color,
      APP_COLORS.YELLOW_COLOR.color,
      APP_COLORS.RED_COLOR.color,
    ];
    const count = [
      datasetsObject.voters_registered,
      datasetsObject.voters_count,
      datasetsObject.voters_expressed,
      datasetsObject.voters_not_expressed,
    ];
    const usedLabels = [
        "Inscrits",
        "Votants",
        "V. Exprimés",
        "B. Nuls",
      ];
    setFormatedData({
        series: [
          {
            label: "",
            data: count,
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "bar",
          },
          plotOptions: {
            bar: {
              distributed: true,
              borderRadius: 10,
              dataLabels: {
                position: "top", // top, center, bottom
              },
            },
          },
          dataLabels: {
            enabled: true,
            formatter: (val) => {
              return val + "";
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#304758"],
            },
          },
  
          xaxis: {
            categories: usedLabels,
            position: "bottom",
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: (val) => {
                return val + `${forRecapVoters ? "" : "voix"}`;
              },
            },
          },
          colors,
          title: {
            text: customTitle,
            floating: true,
            offsetY: 0,
            align: "center",
            style: {
              color: "#444",
            },
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
            type="bar"
            height={350}
          />
        </div>
      )}
    </>
  );
};

export default ColumnChart;
