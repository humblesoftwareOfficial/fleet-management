import React from "react";
import {
  ContainerList,
  TitleList,
  HeaderList,
  ColumnList,
  RowList,
  ColumnListData,
  ContainerColumnData
} from "../../../Styling/Article";

const vehicles = [
  {
    code: "1",
    type: "4x4",
    modele: "Toyota Rav 4",
    marque: "Toyota",
    km: "25",
    plaque_imm: "DK-1254-AL",
  },
  {
    code: "2",
    type: "Berline",
    modele: "BMW Série 3",
    marque: "BMW",
    km: "75",
    plaque_imm: "M MG 4684",
  },
  {
    code: "3",
    type: "Caddy",
    modele: "Caddy",
    marque: "WolksWagen",
    km: "100",
    plaque_imm: "DK-4582-K",
  },
  {
    code: "4",
    type: "Merc",
    modele: "Classe CLA",
    marque: "Mercedes",
    km: "250",
    plaque_imm: "DK-251-ML",
  },
  {
    code: "5",
    type: "MayB",
    modele: "M 57",
    marque: "Maybach",
    km: "12",
    plaque_imm: "US 45785 MM",
  }
]

export default function ListVehicle() {

  const renderVehiclesData = () =>
    vehicles.map((vehicle) => (
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
      <TitleList>Liste des véhicules</TitleList>
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
    </ContainerList>
  );
}
