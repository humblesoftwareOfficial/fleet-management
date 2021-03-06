import React from "react";
import { AiFillCar } from "react-icons/ai";
import { IconCircle, VehicleDescription } from "../../../Styling/DayLocation";
import { Button } from "../../../Styling/Shared";
import { BodyCardVehicle, VehicleCard } from "../../../Styling/Vehicle";

export default function CardVehicle({ vehicle, isWeb = false }) {
  const renderText = (text) =>
    text?.length > 10 ? `${text?.substr(0, 10)} ...` : text;
  return (
    <VehicleCard isWeb={isWeb}>
      <BodyCardVehicle>
        <IconCircle style={{ margin: "2px" }}>
          <AiFillCar size={24} style={{ margin: "7px 0px" }} color="#001F3F" />
        </IconCircle>
        <VehicleDescription>
          {`${renderText(vehicle?.modele)} (${renderText(vehicle?.type)})`}{" "}
          <br />
          <b>{`${vehicle?.marque}`}</b> <br />
          {`${vehicle?.km}`}
        </VehicleDescription>
        <Button borderColor="#001f3f">Afficher le véhicule</Button>
        <Button borderColor="#001f3f">Voir les réservations</Button>
      </BodyCardVehicle>
    </VehicleCard>
  );
}
