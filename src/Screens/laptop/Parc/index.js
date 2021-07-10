import React, { useEffect } from "react";
import { MainDashboard } from "../../../Styling/Dashboard";
import { ContainerSection } from "../../../Styling/Shared";
import HeaderSection from "../../Shared/Header";
import ListVehicle from "./ListVehicle";

export default function Parc({ ...props }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Parc autmobile" />
        <ListVehicle />
      </MainDashboard>
    </ContainerSection>
  );
}
