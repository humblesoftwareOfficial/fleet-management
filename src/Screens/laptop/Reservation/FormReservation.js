import React from "react";
import {
  ContainerForm,
  Form,
  GrouPInput,
  Input,
  TitleGroupForm,
} from "../../../Styling/Reservation";
import { Button } from "../../../Styling/Shared";

export default function FormReservation({isMobile = false}) {
  return (
    <ContainerForm>
      <Form>
        <GrouPInput>
          <TitleGroupForm>Client</TitleGroupForm>
          <Input placeholder="Nom"isMobile={isMobile} />
          <Input placeholder="Prénom" isMobile={isMobile} />
          <Input placeholder="Téléphone" isMobile={isMobile} />
          <Input placeholder="Adresse" isMobile={isMobile} />
          <Input placeholder="Date de naissane" isMobile={isMobile} />
          <Input placeholder="Numéro CNI / Passeport" isMobile={isMobile} />
          <Input placeholder="Numéro permis de conduire" isMobile={isMobile} />
        </GrouPInput>
        <GrouPInput>
          <TitleGroupForm>Véhicule</TitleGroupForm>
          <Input placeholder="Numéro Imm." isMobile={isMobile} />
          <Input placeholder="Type de véhicule"isMobile={isMobile} />
          <Input placeholder="Marque du véhicule" isMobile={isMobile} />
          <Input placeholder="Modéle du véhicule" isMobile={isMobile} />
          <Input placeholder="Km au départ" isMobile={isMobile} />
          <Input placeholder="Carburant au départ" isMobile={isMobile} />
        </GrouPInput>
        <GrouPInput>
          <TitleGroupForm>Contrat</TitleGroupForm>
          <Input placeholder="Date de location" isMobile={isMobile} />
          <Input placeholder="Heure de location"isMobile={isMobile} />
          <Input placeholder="Durée prévue" isMobile={isMobile} />
          <Input placeholder="Caution versée" isMobile={isMobile} />
          <Input placeholder="Prix à la journée" isMobile={isMobile} />
          <Input placeholder="Date de retour" isMobile={isMobile} />
          <Input placeholder="Heure de retour" isMobile={isMobile} />
        </GrouPInput>
        <GrouPInput>
          <TitleGroupForm>Option avec chauffeur</TitleGroupForm>
          <Input placeholder="Nom du chauffeur" isMobile={isMobile} />
          <Input placeholder="Prénom du chauffeur"isMobile={isMobile} />
          <Input placeholder="Numéro permis de conduire" isMobile={isMobile} />
          <Input placeholder="Délivré le" isMobile={isMobile} />
          <Input placeholder="Cout / jour" isMobile={isMobile} />
          <Input placeholder="Téléphone du chauffeur" isMobile={isMobile} />
        </GrouPInput>
        <GrouPInput>
          <TitleGroupForm>Clauses particulières</TitleGroupForm>
          <Input placeholder="Supplément par heure de retard de restitution" isMobile={isMobile} />
          <Input placeholder="Destination"isMobile={isMobile} />
          <Input placeholder="Total à payer" isMobile={isMobile} />
        </GrouPInput>
      </Form>
      <Button borderColor="#001f3f">Enregistrer</Button>
      <Button borderColor="green">Enregistrer et imprimer</Button>
      <Button borderColor="#E62B6F" style={{ color: "#E62B6F" }}>Annuler</Button>
    </ContainerForm>
  );
}
