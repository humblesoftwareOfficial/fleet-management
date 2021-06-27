import React from "react";
import {
  ContainerDayLocation,
  TitleDayLocation,
} from "../../../../Styling/DayLocation";
import CardItemLocation from "./CardItemLocation";
import Faker from "faker";

const generateFakeLocation = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      vehicule: {
        type: Faker.vehicle.type(),
        modele: Faker.vehicle.model(),
        marque: Faker.vehicle.manufacturer(),
        plaque_imm: Faker.vehicle.vin(),
      },
      client: {
        firstname: Faker.name.firstName(),
        lastname: Faker.name.lastName(),
        telephone: Faker.phone.phoneNumber(),
        cni: "1757199203698",
      },
      plage: {
          start: Faker.date.past(),
          end: Faker.date.future()
      }
    });
  }
  return data;
};

export default function DayLoaction() {
  const locations = generateFakeLocation();

  const renderLocations = () =>
    locations?.map((loc) => <CardItemLocation location={loc} />);
  return (
    <ContainerDayLocation>
      <TitleDayLocation>
        <h1>Locations en cours</h1>
      </TitleDayLocation>
      {renderLocations()}
    </ContainerDayLocation>
  );
}
