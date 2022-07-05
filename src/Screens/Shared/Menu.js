import { navigate } from "@reach/router";
import React from "react";
import { BsGridFill } from "react-icons/bs";

import { AiOutlineMonitor, AiOutlineFilter } from "react-icons/ai";
import {
  ContainerMenu,
  CotainerIcon,
  CotainerLabel,
  MenuItem,
} from "../../Styling/Menu";
// import { Divider } from "../../Styling/Shared";

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
      {/* <Divider /> */}
      <MenuItem onClick={() => onNavigate("results")}>
        <CotainerIcon>
          <AiOutlineMonitor size={22} />
        </CotainerIcon>
        <CotainerLabel>Résultats par zone</CotainerLabel>
      </MenuItem>
      <MenuItem onClick={() => onNavigate("filters")}>
        <CotainerIcon>
          <AiOutlineFilter size={22} />
        </CotainerIcon>
        <CotainerLabel>Filtres avancées</CotainerLabel>
      </MenuItem>
    </ContainerMenu>
  );
}
