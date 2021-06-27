import React from "react";
import { ContainerSection } from "../../../Styling/Shared";
import { MainDashboard } from "../../../Styling/Dashboard";
import HeaderSection from "../../Shared/Header";
import ListVehicle from "./ListVehicle";

export default function Parc({ ...props }) {
  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Parc autmobile" />
        <ListVehicle/>
      </MainDashboard>
    </ContainerSection>
  );
}
