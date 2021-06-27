import React from "react";
import CardItem from "./CardItem";
import { RecapContainer } from "../../../Styling/Dashboard";
import { AiFillCar, AiFillDashboard } from "react-icons/ai";
import { BsPersonLinesFill, BsTools } from "react-icons/bs";

export default function RecapCards({ ...props }) {
  return (
    <RecapContainer>
      <CardItem color="#5898DF" value={275} label="Véhicules en parc" icon={<AiFillCar size={24} style={{margin: "7px 0px"}}/>}/>
      <CardItem color="#CEE580" value={104} label="Location en cours" icon={<BsPersonLinesFill size={24} style={{margin: "7px 0px"}}/>}/>
      <CardItem color="#E57CA4" value={50} label="En réparation" icon={<BsTools size={24} style={{margin: "7px 0px"}}/>}/>
      <CardItem color="#E296E7" value={"275 / 100"} label="Réserves d'essence / Gasoil" icon={<AiFillDashboard size={24} style={{margin: "7px 0px"}}/>} isMultiple/>
    </RecapContainer>
  );
}
