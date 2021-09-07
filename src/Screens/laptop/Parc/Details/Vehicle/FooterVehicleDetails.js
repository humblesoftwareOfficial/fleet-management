import React from "react";
import { Button } from "../../../../../Styling/Shared";
import { FooterDetailsVehicle } from "../../../../../Styling/Vehicle";
export default function FooterVehicleDetails({ vehicle }) {
  return (
    <FooterDetailsVehicle>
      <Button borderColor="#001f3f" s>
        Modifier
      </Button>
      <Button borderColor="green" s>
        Voir les réservations
      </Button>
    </FooterDetailsVehicle>
  );
}
