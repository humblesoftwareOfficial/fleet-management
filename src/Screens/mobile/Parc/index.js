import React from "react";
import {  MainDashboardMobile } from "../../../Styling/Dashboard";
import { ContainerSection } from "../../../Styling/Shared";
import HeaderSection from "../../Shared/Header";
import ListVehicleMobile from "./ListVehicle";

export default function Parc() {
  return (
    <ContainerSection>
      <MainDashboardMobile>
        <HeaderSection leftTitle="Parc autmobile" isMobile/>
        <h3>Liste des vehicules</h3>
        <ListVehicleMobile/>
      </MainDashboardMobile>
    </ContainerSection>
  );
}
