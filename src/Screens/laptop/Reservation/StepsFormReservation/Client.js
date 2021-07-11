import React from "react";
import { GrouPInput, Input } from "../../../../Styling/Reservation";
export default function Client({ error, isMobile = false }) {
  return (
    <GrouPInput>
      <Input placeholder="Numéro CNI / Passeport" isMobile={isMobile} />
      <Input placeholder="Numéro permis de conduire" isMobile={isMobile} />
      <Input placeholder="Nom" isMobile={isMobile} />
      <Input placeholder="Prénom" isMobile={isMobile} />
      <Input placeholder="Téléphone" isMobile={isMobile} />
      <Input placeholder="Adresse" isMobile={isMobile} />
      <Input placeholder="Date de naissance" isMobile={isMobile} type="date" />
    </GrouPInput>
  );
}
