import React from "react";
import { GrouPInput, Input } from "../../../../Styling/Reservation";

export default function Chauffeur({ error, isMobile = false }) {
  return (
    <GrouPInput>
      <Input placeholder="Nom du chauffeur" isMobile={isMobile} />
      <Input placeholder="Prénom du chauffeur" isMobile={isMobile} />
      <Input placeholder="Numéro permis de conduire" isMobile={isMobile} />
      <Input placeholder="Délivré le" isMobile={isMobile} />
      <Input placeholder="Cout / jour" isMobile={isMobile} />
      <Input placeholder="Téléphone du chauffeur" isMobile={isMobile} />
    </GrouPInput>
  );
}
