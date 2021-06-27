import React from "react";
import {
  ContainerForm,
  Form,
  GrouPInput,
  Input,
  TitleGroupForm,
} from "../../../Styling/Reservation";
import { Button } from "../../../Styling/Shared";

export default function FormReservation() {
  return (
    <ContainerForm>
      <Form>
        <GrouPInput>
          <TitleGroupForm>Client</TitleGroupForm>
          <Input placeholder="Nom"/>
          <Input placeholder="Prénom" />
          <Input placeholder="Téléphone" />
          <Input placeholder="Adresse" />
          <Input placeholder="Date de naissane" />
          <Input placeholder="Numéro CNI / Passeport" />
          <Input placeholder="Numéro permis de conduire" />
        </GrouPInput>
        <GrouPInput>
          <TitleGroupForm>Véhicule</TitleGroupForm>
          <Input placeholder="Numéro Imm." />
          <Input placeholder="Type de véhicule"/>
          <Input placeholder="Marque du véhicule" />
          <Input placeholder="Modéle du véhicule" />
          <Input placeholder="Km au départ" />
          <Input placeholder="Carburant au départ" />
        </GrouPInput>
        <GrouPInput>
          <TitleGroupForm>Contrat</TitleGroupForm>
          <Input placeholder="Date de location" />
          <Input placeholder="Heure de location"/>
          <Input placeholder="Durée prévue" />
          <Input placeholder="Caution versée" />
          <Input placeholder="Prix à la journée" />
          <Input placeholder="Date de retour" />
          <Input placeholder="Heure de retour" />
        </GrouPInput>
        <GrouPInput>
          <TitleGroupForm>Option avec chauffeur</TitleGroupForm>
          <Input placeholder="Nom du chauffeur" />
          <Input placeholder="Prénom du chauffeur"/>
          <Input placeholder="Numéro permis de conduire" />
          <Input placeholder="Délivré le" />
          <Input placeholder="Cout / jour" />
          <Input placeholder="Téléphone du chauffeur" />
        </GrouPInput>
        <GrouPInput>
          <TitleGroupForm>Clauses particulières</TitleGroupForm>
          <Input placeholder="Supplément par heure de retard de restitution" />
          <Input placeholder="Destination"/>
          <Input placeholder="Total à payer" />
        </GrouPInput>
      </Form>
      <Button borderColor="#001f3f">Enregistrer</Button>
      <Button borderColor="green">Enregistrer et imprimer</Button>
      <Button borderColor="#E62B6F" style={{ color: "#E62B6F" }}>Annuler</Button>
    </ContainerForm>
  );
}
