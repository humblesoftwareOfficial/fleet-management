import React from "react";
import { ContainerFilter, Input } from "../../../Styling/Reservation";

export default function FiltreReservation({ setShorm }) {
  return (
    <ContainerFilter>
      <Input placeholder="Date" style={{ width: "15%" }} type="date" />
      <Input placeholder="Client" style={{ width: "25%" }} />
      <Input placeholder="Type de véhicule" style={{ width: "25%" }} />
      <Input placeholder="Marque de véhicule" style={{ width: "25%" }} />
    </ContainerFilter>
  );
}
