import React from "react";
import { AiFillCar } from "react-icons/ai";
import {
  ContainerDetailsVehicle,
  HeaderDetailsVehicle,
  IconCircleDetails,
  ItemDetailsVehicle,
  RecapDetailsVehicle,
  TopHeaderVehicleDetails,
} from "../../../../../Styling/Vehicle";
export default function HeaderVehicleDetails({ vehicle }) {
  return (
    <HeaderDetailsVehicle>
      <TopHeaderVehicleDetails>
        <IconCircleDetails>
          <AiFillCar
            size={"7vw"}
            style={{ margin: "1vw 0px" }}
            color="#001F3F"
          />
        </IconCircleDetails>
      </TopHeaderVehicleDetails>
      <ContainerDetailsVehicle>
        <ItemDetailsVehicle>
          <b>{vehicle?.marque}</b>
        </ItemDetailsVehicle>
        {`${vehicle?.modele} (${vehicle?.type})`}
        <RecapDetailsVehicle>
          <b style={{ color: "#001f3f" }}>Plaque Imm: </b>
          {vehicle?.plaque_imm}
        </RecapDetailsVehicle>
        <RecapDetailsVehicle>
          <b style={{ color: "#001f3f" }}>Km parcourus: </b>
          {vehicle?.km}
        </RecapDetailsVehicle>
        <RecapDetailsVehicle>
          <b style={{ color: "#001f3f" }}>Carburant: </b>
          {vehicle?.carburant}
        </RecapDetailsVehicle>
        <RecapDetailsVehicle>
          <b style={{ color: "#001f3f" }}>Origine: </b>
          {vehicle?.origine}
        </RecapDetailsVehicle>
        <RecapDetailsVehicle>
          <b style={{ color: "#001f3f" }}>Prix: </b>
          {vehicle?.prix} CFA
        </RecapDetailsVehicle>
      </ContainerDetailsVehicle>
    </HeaderDetailsVehicle>
  );
}
