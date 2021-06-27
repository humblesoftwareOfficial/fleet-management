import React from "react";
import { RecapContainer } from "../../../Styling/Dashboard";
import CardItemMobile from "./CardItemMobile";
import { AiFillCar, AiFillDashboard } from "react-icons/ai";
import { BsPersonLinesFill, BsTools } from "react-icons/bs";

export default function RecapCards() {
  return (
    <RecapContainer>
      <CardItemMobile
        color="#5898DF"
        value={275}
        label="Véhicules en parc"
        icon={<AiFillCar size={24} style={{ margin: "7px 0px" }} />}
      />
      <CardItemMobile
        color="#CEE580"
        value={104}
        label="Location en cours"
        icon={<BsPersonLinesFill size={24} style={{ margin: "7px 0px" }} />}
      />
      <CardItemMobile
        color="#E57CA4"
        value={50}
        label="En réparation"
        icon={<BsTools size={24} style={{ margin: "7px 0px" }} />}
      />
      <CardItemMobile
        color="#E296E7"
        value={"275 / 100"}
        label="Réserves d'essence / Gasoil"
        icon={<AiFillDashboard size={24} style={{ margin: "7px 0px" }} />}
        isMultiple
      />
    </RecapContainer>
  );
}
