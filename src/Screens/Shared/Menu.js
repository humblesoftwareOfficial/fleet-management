import { navigate } from "@reach/router";
import React from "react";
import {
  BsClipboardData,
  BsFillGearFill,
  BsGridFill,
  BsPersonBoundingBox,
  BsTools,
} from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import {
  ContainerMenu,
  CotainerIcon,
  CotainerLabel,
  MenuItem,
} from "../../Styling/Menu";
import { Divider } from "../../Styling/Shared";

export default function Menu({ ...props }) {
  const onNavigate = (link) => {
    navigate(`${link}`);
  };

  // const getActiveSection = useMemo(() => window.location.pathname ,[window.location.pathname]);

  return (
    <ContainerMenu>
      <MenuItem onClick={() => onNavigate("dashboard")}>
        <CotainerIcon>
          <BsGridFill size={22} />
        </CotainerIcon>
        <CotainerLabel>Tableau de bord</CotainerLabel>
      </MenuItem>
      <MenuItem onClick={() => onNavigate("parc")}>
        <CotainerIcon>
          <BsTools size={22} />
        </CotainerIcon>
        <CotainerLabel>Parc automobile</CotainerLabel>
      </MenuItem>
      <MenuItem onClick={() => onNavigate("reservation")}>
        <CotainerIcon>
          <BsPersonBoundingBox size={22} />
        </CotainerIcon>
        <CotainerLabel>Reservations de vehicules</CotainerLabel>
      </MenuItem>
      <MenuItem>
        <CotainerIcon>
          <BsClipboardData size={22} />
        </CotainerIcon>
        <CotainerLabel>Clients & Partenaires</CotainerLabel>
      </MenuItem>
      <Divider />
      <MenuItem>
        <CotainerIcon>
          <FaCoins size={22} />
        </CotainerIcon>
        <CotainerLabel>Finances & Comptabilités</CotainerLabel>
      </MenuItem>
      <MenuItem>
        <CotainerIcon>
          <BsFillGearFill size={22} />
        </CotainerIcon>
        <CotainerLabel>Paramètres & Config.</CotainerLabel>
      </MenuItem>
      <Divider />
    </ContainerMenu>
  );
}
