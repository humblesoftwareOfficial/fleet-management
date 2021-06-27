import React from "react";
import Faker from "faker";
import CardVehicle from "./CardVehicle";
import { ContainerVehicleList } from "../../../Styling/Vehicle";

const generateFakeVehicle = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      type: Faker.vehicle.type(),
      modele: Faker.vehicle.model(),
      marque: Faker.vehicle.manufacturer(),
      plaque_imm: Faker.vehicle.vin(),
      km: Faker.datatype.number()
    });
  }
  return data;
};

export default function ListVehicle() {
    const data = generateFakeVehicle()
    const renderVehicleList = () => (
        data.map((vehicle) => (
            <CardVehicle vehicle={vehicle}/>
        ))
    )
  return (
    <ContainerVehicleList>
        {renderVehicleList()}
    </ContainerVehicleList>
  )
}
