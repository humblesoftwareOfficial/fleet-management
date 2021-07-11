import React from "react";
import { GrouPInput, Input } from "../../../../Styling/Reservation";

export default function Contrat({ error, isMobile = false }) {
  return (
    <GrouPInput>
      <Input placeholder="Date de location" isMobile={isMobile} type="date" />
      <Input placeholder="Heure de location" isMobile={isMobile} type="time" />
      <Input placeholder="Durée prévue" isMobile={isMobile} />
      <Input placeholder="Caution versée" isMobile={isMobile} />
      <Input placeholder="Prix à la journée" isMobile={isMobile} />
      <Input placeholder="Date de retour" isMobile={isMobile} type="date" />
      <Input placeholder="Heure de retour" isMobile={isMobile} type="time" />
    </GrouPInput>
  );
}
