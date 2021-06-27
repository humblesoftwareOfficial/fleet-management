import React from "react";
import { AiFillCar } from "react-icons/ai";
import { IconCircle, VehicleDescription } from "../../../Styling/DayLocation";
import { Button } from "../../../Styling/Shared";
import { BodyCardVehicle, VehicleCard } from "../../../Styling/Vehicle";

export default function CardVehicle({ vehicle }) {
  return (
    <VehicleCard>
      <BodyCardVehicle>
        <IconCircle style={{ margin: "2px" }}>
          <AiFillCar size={24} style={{ margin: "7px 0px" }} color="#001F3F" />
        </IconCircle>
        <VehicleDescription>
          {`${vehicle?.modele} (${vehicle?.type})`} <br />
          <b>{`${vehicle?.marque}`}</b> <br />
          {`${vehicle?.km}`}
        </VehicleDescription>
        <Button borderColor="#001f3f">Afficher le véhicule</Button>
      </BodyCardVehicle>
    </VehicleCard>
  );
}
