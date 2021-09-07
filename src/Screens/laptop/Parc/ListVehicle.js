import Faker from "faker";
import React, { useEffect, useState } from "react";
import { ContainerList } from "../../../Styling/Article";
import { Input } from "../../../Styling/Reservation";
import { DefaultButton, Header } from "../../../Styling/Shared";
import { ContainerVehicleList } from "../../../Styling/Vehicle";
import CardVehicle from "../../mobile/Parc/CardVehicle";
import Dialog from "../../Shared/Dialog";
import Modal from "../../Shared/Modal";
import DetailsVehicle from "./Details/Vehicle";
import FormVehicle from "./FormVehicle";

const generateFakeVehicle = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      type: Faker.vehicle.type(),
      modele: Faker.vehicle.model(),
      marque: Faker.vehicle.manufacturer(),
      plaque_imm: Faker.vehicle.vin(),
      km: Faker.datatype.number(),
      carburant: Faker.datatype.number(),
      origine: Faker.address.country(),
      prix: Faker.random.objectElement([
        "7 500 000",
        "9 852 000",
        "15 708 520",
      ]),
    });
  }
  return data;
};

export default function ListVehicle() {
  const [openModal, setOpenModal] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const data = generateFakeVehicle();

  useEffect(() => {
    vehicleDetails ? setOpenDetails(true) : setOpenDetails(false);
  }, [vehicleDetails]);
  const onClose = () => {
    setOpenModal(false);
  };

  // const renderVehiclesData = () =>
  //   data.map((vehicle) => (
  //     <RowList>
  //       <ColumnListData backgroundColor="#C7D0DA">{vehicle.type}</ColumnListData>
  //       <ColumnListData backgroundColor="#C7D0DA">{vehicle.marque}</ColumnListData>
  //       <ColumnListData backgroundColor="#C7D0DA">{vehicle.modele}</ColumnListData>
  //       <ColumnListData backgroundColor="#C7D0DA">{vehicle.km}</ColumnListData>
  //       <ColumnListData backgroundColor="#C7D0DA">{vehicle.plaque_imm}</ColumnListData>
  //     </RowList>
  //   ));

  const onShowVehicle = (vehicle) => {
    setVehicleDetails(vehicle);
  };

  const renderVehicleList = () =>
    data.map((vehicle) => (
      <CardVehicle
        vehicle={vehicle}
        isWeb
        onShowVehicle={() => onShowVehicle(vehicle)}
      />
    ));

  return (
    <ContainerList>
      <Header>
        <Input placeholder="Rechercher ..." />
        <DefaultButton borderColor="#001f3f" onClick={() => setOpenModal(true)}>
          Ajouter un véhicule
        </DefaultButton>
      </Header>
      {/* <HeaderList>
        <ColumnList>Type</ColumnList>
        <ColumnList>Marque</ColumnList>
        <ColumnList>Modèle</ColumnList>
        <ColumnList>Km compteur</ColumnList>
        <ColumnList>Plaque Im.</ColumnList>
      </HeaderList> */}
      {/* <ContainerColumnData> */}
      <ContainerVehicleList>{renderVehicleList()}</ContainerVehicleList>
      {/* </ContainerColumnData> */}
      <Modal
        open={openModal}
        children={<FormVehicle />}
        onClose={onClose}
        title="Nouveau véhicule"
      />
      <Dialog
        open={openDetails}
        onClose={() => setVehicleDetails(null)}
        children={<DetailsVehicle vehicle={vehicleDetails} />}
      />
    </ContainerList>
  );
}
