import React from "react";
import { ContainerCharts, ContainerChart } from "../../../../Styling/Chart";
import ColumnChart from "./ColumnChart";

import EvolutionDepenses from "./EvolutionDepenses";
import LinearEvolution from "./LinearEvolution";
import PieApexResult from "./PieApexResult";
import PieResults from "./PieResult";

export default function EvolutionChart({
  data = [],
  customTitle = "",
  legend = "",
}) {
  console.log(data[0])
  return (
    <ContainerCharts>
      <ContainerChart>
        <ColumnChart
          datasetsObject={{
            voters_count: data ? data[0]?.voters_count || 0 : 0,
            voters_expressed: data ? data[0]?.voters_expressed || 0 : 0,
            voters_not_expressed: data ? data[0]?.voters_not_expressed || 0 : 0,
            voters_registered: data ? data[0]?.voters_registered || 0 : 0,
          }}
          forRecapVoters
          customTitle="Taux de Participation"
          legend={legend}
        />
      </ContainerChart>
      <ContainerChart>
        <ColumnChart
          datasets={data}
          customTitle={customTitle}
          legend={legend}
        />
      </ContainerChart>
      <ContainerChart>
        <PieApexResult
          datasets={data}
          customTitle={customTitle}
          legend={legend}
        />
      </ContainerChart>
      {/* <ContainerChart>
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
      </ContainerChart> */}
    </ContainerCharts>
  );
}
