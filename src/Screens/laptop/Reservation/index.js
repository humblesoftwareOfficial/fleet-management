import React from "react";
import { MainDashboard } from "../../../Styling/Dashboard";
import { ContainerSection } from "../../../Styling/Shared";
import HeaderSection from "../../Shared/Header";
import FormReservation from "./FormReservation";

export default function Reservation({ ...props }) {
  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Réservation" />
        <h1>Location de véhicule</h1>
        <FormReservation/>
      </MainDashboard>
    </ContainerSection>
  );
}
