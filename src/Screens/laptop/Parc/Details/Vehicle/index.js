import React from "react";
import { VehicleDetails } from "../../../../../Styling/Vehicle";
import FooterVehicleDetails from "./FooterVehicleDetails";
import HeaderVehicleDetails from "./HeaderVehicleDetails";
export default function DetailsVehicle({ vehicle }) {
  return (
    <VehicleDetails>
      <HeaderVehicleDetails vehicle={vehicle} />
      <FooterVehicleDetails vehicle={vehicle} />
    </VehicleDetails>
  );
}
