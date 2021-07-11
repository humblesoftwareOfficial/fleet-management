import React from "react";
import { GrouPInput, Input } from "../../../../Styling/Reservation";

export default function Clauses({ error, isMobile = false }) {
  return (
    <GrouPInput>
      <Input
        placeholder="Supplément par heure de retard de restitution"
        isMobile={isMobile}
      />
      <Input placeholder="Destination" isMobile={isMobile} />
      <Input placeholder="Total à payer" isMobile={isMobile} />
    </GrouPInput>
  );
}
