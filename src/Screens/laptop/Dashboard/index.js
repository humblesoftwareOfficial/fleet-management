import React from "react";
import { ContainerSection } from "../../../Styling/Shared";
import { MainDashboard } from "../../../Styling/Dashboard";
import HeaderSection from "../../Shared/Header";
import RecapCards from "./RecapCards";
import EvolutionChart from "./EvolutionChart";
import DayLoaction from "./DayLocation";

export default function DashBoard({ ...props }) {
  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Home" />
        <RecapCards/>
        <EvolutionChart/>
        <DayLoaction/>
      </MainDashboard>
    </ContainerSection>
  );
}
