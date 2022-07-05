import React from "react";
import { ContainerCharts, ContainerChart } from "../../../../Styling/Chart";
import EvolutionDepenses from "./EvolutionDepenses";
import LinearEvolution from "./LinearEvolution";
import PieResults from "./PieResult";

export default function EvolutionChart({
  data = [],
  customTitle = "",
  legend = "",
}) {
  return (
    <ContainerCharts>
      <ContainerChart>
        <LinearEvolution
          datasets={data}
          customTitle={customTitle}
          legend={legend}
        />
      </ContainerChart>
      <ContainerChart>
        <EvolutionDepenses
          datasets={data}
          customTitle={customTitle}
          legend={legend}
        />
      </ContainerChart>
      <ContainerChart>
        <PieResults datasets={data} customTitle={customTitle} legend={legend} />
      </ContainerChart>
    </ContainerCharts>
  );
}
