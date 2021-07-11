import Faker from "faker";
import React, { useEffect, useState } from "react";
import { MainDashboard } from "../../../Styling/Dashboard";
import { ContainerLocations } from "../../../Styling/DayLocation";
import {
  ContainerSection,
  DefaultButton,
  Header,
} from "../../../Styling/Shared";
import HeaderSection from "../../Shared/Header";
import CardItemLocation from "../Dashboard/DayLocation/CardItemLocation";
import FiltreReservation from "./FiltreReservation";
import FormReservation from "./FormReservation";

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
        end: Faker.date.future(),
      },
      status: Faker.random.objectElement(["end", "running", "waiting_start"]),
    });
  }
  return data;
};
export default function Reservation({ ...props }) {
  const [showForm, setShorm] = useState(false);
  const locations = generateFakeLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderLocations = () =>
    locations?.map((loc) => <CardItemLocation location={loc} />);
  return (
    <ContainerSection>
      <MainDashboard>
        <HeaderSection leftTitle="Réservation" />
        {showForm ? (
          <FormReservation onCancel={() => setShorm(false)} />
        ) : (
          <>
            <Header>
              <h3>Filtres</h3>
              <DefaultButton
                borderColor="#001f3f"
                onClick={() => setShorm(true)}
              >
                Nouvelle réservation
              </DefaultButton>
            </Header>
            <FiltreReservation setShorm={setShorm} />
            <ContainerLocations>{renderLocations()}</ContainerLocations>
          </>
        )}
      </MainDashboard>
    </ContainerSection>
  );
}
