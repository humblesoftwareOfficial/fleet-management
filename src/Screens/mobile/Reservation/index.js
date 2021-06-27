import React from "react";
import { MainDashboard } from "../../../Styling/Dashboard";
import { ContainerSection } from "../../../Styling/Shared";
import FormReservation from "../../laptop/Reservation/FormReservation";
import HeaderSection from "../../Shared/Header";

export default function Reservation({ ...props }) {
  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Réservation" isMobile/>
        <h1>Location de véhicules</h1>
        <FormReservation isMobile/>
      </MainDashboard>
    </ContainerSection>
  );
}
