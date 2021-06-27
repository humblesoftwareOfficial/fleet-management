import React, { useEffect, useState } from "react";
import {
  Button,
  CloseMenuMobile,
  IconItemMenu,
  Item,
  MenuItem,
  MenuItemContainer,
  MenuMobileContainer,
  MenuMobileContent,
} from "../../Styling/Shared";
import {
  BsGridFill,
  BsTools,
  BsPersonBoundingBox,
  BsClipboardData,
  BsFillGearFill,
} from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { navigate } from "@reach/router";

export default function MenuMobile({ open, onClose }) {
  const [style, setStyle] = useState({ width: "0%" });

  useEffect(() => {
    open ? setStyle({ width: "100%" }) : setStyle({ width: "0%" });
  }, [open]);

  const onNavigate = (link) => {
    navigate(`${link}`)
  }

  return (
    <MenuMobileContainer style={style}>
      <CloseMenuMobile onClick={onClose}>
        <Button
          borderColor="#E62B6F"
          onClick={onClose}
          style={{ color: "#E62B6F" }}
        >
          Fermer
        </Button>
      </CloseMenuMobile>
      <MenuMobileContent>
        <MenuItemContainer>
          <MenuItem onClick={() => onNavigate("dashboard")}>
            <Item>
              <IconItemMenu>
                <BsGridFill size={80} />
              </IconItemMenu>
              Dashoboard
            </Item>
          </MenuItem>
          <MenuItem onClick={() => onNavigate("parc")}>
            <Item>
              {" "}
              <IconItemMenu>
                <BsTools size={80} />
              </IconItemMenu>
              Parc automobile
            </Item>
          </MenuItem>
          <MenuItem onClick={() => onNavigate("reservation")}>
            <Item>
              {" "}
              <IconItemMenu>
                <BsPersonBoundingBox size={80} />
              </IconItemMenu>
              Reservations de vehicules
            </Item>
          </MenuItem>
          <MenuItem>
            <Item>
              <IconItemMenu>
                <BsClipboardData size={80} />
              </IconItemMenu>
              Clients & Partenaires
            </Item>
          </MenuItem>
          <MenuItem>
            <Item>
              <IconItemMenu>
                <FaCoins size={80} />
              </IconItemMenu>
              Finances & Comptabilités
            </Item>
          </MenuItem>
          <MenuItem>
            <Item>
              <IconItemMenu>
                <BsFillGearFill size={80} />
              </IconItemMenu>
              Paramètres & Config.
            </Item>
          </MenuItem>
        </MenuItemContainer>
      </MenuMobileContent>
    </MenuMobileContainer>
  );
}
