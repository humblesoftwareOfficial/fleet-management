import React, { useState } from "react";
import {
  ContainerList,
  TitleList,
  HeaderList,
  ColumnList,
  RowList,
  ColumnListData,
  ContainerColumnData
} from "../../../Styling/Article";
import { Input } from "../../../Styling/Reservation";
import { DefaultButton, Header } from "../../../Styling/Shared";
import Faker from "faker";
import Modal from "../../Shared/Modal";
import FormVehicle from "./FormVehicle";

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

  const [openModal, setOpenModal] = useState(false)
  const data = generateFakeVehicle();

  const onClose = () => {setOpenModal(false)};

  const renderVehiclesData = () =>
    data.map((vehicle) => (
      <RowList>
        <ColumnListData backgroundColor="#C7D0DA">{vehicle.type}</ColumnListData>
        <ColumnListData backgroundColor="#C7D0DA">{vehicle.marque}</ColumnListData>
        <ColumnListData backgroundColor="#C7D0DA">{vehicle.modele}</ColumnListData>
        <ColumnListData backgroundColor="#C7D0DA">{vehicle.km}</ColumnListData>
        <ColumnListData backgroundColor="#C7D0DA">{vehicle.plaque_imm}</ColumnListData>
      </RowList>
    ));

  return (
    <ContainerList>
      <Header>
        <Input placeholder="Rechercher ..."/>
        <DefaultButton borderColor="#001f3f" onClick={() => setOpenModal(true)}>Ajouter un véhicule</DefaultButton>
      </Header>
      <HeaderList>
        <ColumnList>Type</ColumnList>
        <ColumnList>Marque</ColumnList>
        <ColumnList>Modèle</ColumnList>
        <ColumnList>Km compteur</ColumnList>
        <ColumnList>Plaque Im.</ColumnList>
      </HeaderList>
      <ContainerColumnData>
        {renderVehiclesData()}
      </ContainerColumnData>
      <Modal open={openModal} children={<FormVehicle/>} onClose={onClose}/>
    </ContainerList>
  );
}
