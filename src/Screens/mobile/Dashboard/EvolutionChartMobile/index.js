import React from "react";

import { ContainerChartMobile, ContainerCharts } from "../../../../Styling/Chart";
import EvolutionDepenses from "../../../laptop/Dashboard/EvolutionChart/EvolutionDepenses";
import LinearEvolution from "../../../laptop/Dashboard/EvolutionChart/LinearEvolution";
import PieResults from "../../../laptop/Dashboard/EvolutionChart/PieResult";

export default function EvolutionChartMobile({
  data = [],
  customTitle = "",
  legend = "",
}) {
  return (
    <ContainerCharts>
      <ContainerChartMobile>
        <PieResults
          datasets={data}
          customTitle={customTitle}
          legend={legend}
          isMobile
        />
      </ContainerChartMobile>
      <ContainerChartMobile>
        <LinearEvolution
          isMobile
          datasets={data}
          customTitle={customTitle}
          legend={legend}
        />
      </ContainerChartMobile>
      <ContainerChartMobile>
        <EvolutionDepenses
          datasets={data}
          customTitle={customTitle}
          legend={legend}
          isMobile
        />
      </ContainerChartMobile>
    </ContainerCharts>
  );
}
