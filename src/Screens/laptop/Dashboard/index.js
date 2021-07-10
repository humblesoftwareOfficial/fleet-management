import React, { useEffect } from "react";
import { MainDashboard } from "../../../Styling/Dashboard";
import { ContainerSection } from "../../../Styling/Shared";
import HeaderSection from "../../Shared/Header";
import DayLoaction from "./DayLocation";
import EvolutionChart from "./EvolutionChart";
import RecapCards from "./RecapCards";

export default function DashBoard({ ...props }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Home" />
        <RecapCards />
        <EvolutionChart />
        <DayLoaction />
      </MainDashboard>
    </ContainerSection>
  );
}
