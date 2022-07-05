import React, { useState } from "react";
import {
  BodyCardRecapLocation,
  CardRecapLocation,
  FooterCardRecapLocation,
  HeaderCardRecapLocation,
  IconCircle,
  UserDescription,
  VehicleDescription,
} from "../../../../Styling/DayLocation";
import { AiFillCar } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Button } from "../../../../Styling/Shared";
export default function CardItemLocation({ location }) {
  const [showVehicle, setShowVehicle] = useState(false);
  const [showClient, setShowClient] = useState(false);

  // console.log(location?.plage)

  const fullData = {height: "100%"};
  const hideData = {display: "none"}

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

  return (
    <CardRecapLocation>
      <BodyCardRecapLocation>
        <HeaderCardRecapLocation
          onMouseEnter={() => onShowFullData("vehicle")}
          onMouseLeave={() => onHideFullData("vehicle")}
          style={showVehicle ? fullData : (showClient ? hideData : {})}
        >
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
            <Button borderColor="#001f3f">Voir la réservation</Button>
            <Button borderColor="#001f3f">Afficher le véhicule</Button>
            </>
          )}
        </HeaderCardRecapLocation>
        <FooterCardRecapLocation
          onMouseEnter={() => onShowFullData("client")}
          onMouseLeave={() => onHideFullData("client")}
          style={showClient ? fullData : (showVehicle ? hideData : {})}
        >
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
            <Button >Afficher le client</Button>
            <Button>Voir toutes ses réservations</Button>
            </>
          )}
        </FooterCardRecapLocation>
      </BodyCardRecapLocation>
    </CardRecapLocation>
  );
}
