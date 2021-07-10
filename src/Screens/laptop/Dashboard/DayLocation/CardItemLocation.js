import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import {
  BodyCardRecapLocation,
  CardRecapLocation,
  FooterCardRecapLocation,
  HeaderCardRecapLocation,
  IconCircle,
  UserDescription,
  VehicleDescription,
} from "../../../../Styling/DayLocation";
import { StatusReservation } from "../../../../Styling/Reservation";
import { Button } from "../../../../Styling/Shared";

const statusColor = {
  end: "#D01A0B",
  running: "#54B30D",
  waiting_start: "#D0CA0B",
};

const statusText = {
  end: "Terminé",
  running: "En cours",
  waiting_start: "En attente",
};

export default function CardItemLocation({ location }) {
  const [showVehicle, setShowVehicle] = useState(false);
  const [showClient, setShowClient] = useState(false);

  console.log(location.status);
  const fullData = { height: "100%" };
  const hideData = { display: "none" };

  const onShowFullData = (part) => {
    switch (part) {
      case "vehicle":
        setShowVehicle(true);
        break;
      case "client":
        setShowClient(true);
        break;
      default:
        break;
    }
  };

  const onHideFullData = (part) => {
    switch (part) {
      case "vehicle":
        setShowVehicle(false);
        break;
      case "client":
        setShowClient(false);
        break;
      default:
        break;
    }
  };

  const renderLocationStatus = () => (
    <StatusReservation color={statusColor[location.status]}>
      {statusText[location.status]}
    </StatusReservation>
  );
  return (
    <CardRecapLocation>
      <BodyCardRecapLocation>
        <HeaderCardRecapLocation
          onMouseEnter={() => onShowFullData("vehicle")}
          onMouseLeave={() => onHideFullData("vehicle")}
          style={showVehicle ? fullData : showClient ? hideData : {}}
        >
          {renderLocationStatus()}
          <IconCircle>
            <AiFillCar
              size={24}
              style={{ margin: "7px 0px" }}
              color="#001F3F"
            />
          </IconCircle>
          <VehicleDescription>
            {`${location?.vehicule?.modele} (${location?.vehicule?.type})`}{" "}
            <br />
            <b>{`${location?.vehicule?.marque}`}</b>
          </VehicleDescription>
          {showVehicle && (
            <>
              <Button hoverColor="#001F3F">Voir la réservation</Button>
              <Button hoverColor="#001F3F">Afficher le véhicule</Button>
            </>
          )}
        </HeaderCardRecapLocation>
        <FooterCardRecapLocation
          onMouseEnter={() => onShowFullData("client")}
          onMouseLeave={() => onHideFullData("client")}
          style={showClient ? fullData : showVehicle ? hideData : {}}
        >
          {showClient && renderLocationStatus()}
          <IconCircle>
            <BiUser size={24} style={{ margin: "7px 0px" }} color="#001F3F" />
          </IconCircle>
          <UserDescription>
            {`${location?.client?.firstname} ${location?.client?.lastname}`}{" "}
            <br />
            {`${location?.client?.telephone}`}
          </UserDescription>
          {showClient && (
            <>
              <Button color="#FFF" hoverColor="#001F3F">
                Afficher le client
              </Button>
              <Button color="#FFF" hoverColor="#001F3F">
                Voir toutes ses réservations
              </Button>
            </>
          )}
        </FooterCardRecapLocation>
      </BodyCardRecapLocation>
    </CardRecapLocation>
  );
}
