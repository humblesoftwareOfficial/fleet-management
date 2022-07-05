import { navigate } from "@reach/router";
import React, { useEffect, useState } from "react";
import { AiOutlineFilter, AiOutlineMonitor } from "react-icons/ai";
import { BsGridFill } from "react-icons/bs";

import { Button, CloseMenuMobile, IconItemMenu, Item, MenuItem, MenuItemContainer, MenuMobileContainer, MenuMobileContent } from "../../Styling/Shared";

export default function MenuMobile({ open, onClose }) {
  const [style, setStyle] = useState({ width: "0%" });

  useEffect(() => {
    open ? setStyle({ width: "100%" }) : setStyle({ width: "0%" });
  }, [open]);

  const onNavigate = (link) => {
    navigate(`${link}`);
  };

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
          <MenuItem onClick={() => onNavigate("results")}>
            <Item>
              {" "}
              <IconItemMenu>
                <AiOutlineMonitor size={80} />
              </IconItemMenu>
              Résultats par zone
            </Item>
          </MenuItem>
          <MenuItem onClick={() => onNavigate("filters")}>
            <Item>
              {" "}
              <IconItemMenu>
                <AiOutlineFilter size={80} />
              </IconItemMenu>
              Filtres avancées
            </Item>
          </MenuItem>
          {/* <MenuItem>
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
          </MenuItem> */}
        </MenuItemContainer>
      </MenuMobileContent>
    </MenuMobileContainer>
  );
}
