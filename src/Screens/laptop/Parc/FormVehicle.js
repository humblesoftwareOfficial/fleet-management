import React from "react";
import { ContainerForm, Form, Input } from "../../../Styling/Reservation";

export default function FormVehicle() {
  return (
    <ContainerForm>
      <Form>
        <Input placeholder="Type" style={{ width: "44.5%" }} />
        <Input placeholder="Marque" style={{ width: "44.5%" }} />
        <Input placeholder="Modele" style={{ width: "44.5%" }} />
        <Input placeholder="Plaque Imm." style={{ width: "44.5%" }} />
        <Input
          placeholder="Km au compteur"
          style={{ width: "44.5%" }}
          type="number"
        />
        <Input
          placeholder="Carburant"
          style={{ width: "44.5%" }}
          type="number"
        />
        <Input placeholder="Origine" style={{ width: "44.5%" }} />
        <Input placeholder="Prix" style={{ width: "44.5%" }} type="number" />
      </Form>
    </ContainerForm>
  );
}
