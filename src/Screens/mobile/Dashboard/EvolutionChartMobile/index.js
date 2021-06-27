import React from "react";
import { ContainerCharts, ContainerChart, ContainerChartMobile } from "../../../../Styling/Chart";
import LocationEvolution from "../../../laptop/Dashboard/EvolutionChart/LocationEvolution";
import VehiculeType from "../../../laptop/Dashboard/EvolutionChart/VehiculeType"

export default function EvolutionChartMobile() {
  return (
    <ContainerCharts>
      <ContainerChartMobile>
        <LocationEvolution isMobile/>
      </ContainerChartMobile>
      <ContainerChartMobile>
        <VehiculeType isMobile/>
      </ContainerChartMobile>
    </ContainerCharts>
  );
}
