import React from "react";
import {MainDashboardMobile } from "../../../Styling/Dashboard";
import { ContainerSection } from "../../../Styling/Shared";
import RecapCards from "./RecapCards";
import HeaderSection from "../../Shared/Header";
import EvolutionChartMobile from "./EvolutionChartMobile";
import DayLoactionMobile from "./DayLocationMobile";


export default function DashBoard() {
  return (
    <ContainerSection>
      <MainDashboardMobile>
        <HeaderSection leftTitle="Home" />
        <RecapCards />
        <EvolutionChartMobile />
        <DayLoactionMobile />
      </MainDashboardMobile>
    </ContainerSection>
  );
}
