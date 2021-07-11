import React from "react";
import { GrouPInput, Input } from "../../../../Styling/Reservation";

export default function Vehicule({ error, isMobile = false }) {
  return (
    <GrouPInput>
      <Input placeholder="Numéro Imm." isMobile={isMobile} />
      <Input placeholder="Type de véhicule" isMobile={isMobile} />
      <Input placeholder="Marque du véhicule" isMobile={isMobile} />
      <Input placeholder="Modéle du véhicule" isMobile={isMobile} />
      <Input placeholder="Km au départ" isMobile={isMobile} />
      <Input placeholder="Carburant au départ" isMobile={isMobile} />
    </GrouPInput>
  );
}
