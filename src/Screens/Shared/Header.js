import React, { useState } from "react";
import { BsLayoutWtf } from "react-icons/bs";

import { Button, Header, TitleHeader, UserCircle } from "../../Styling/Shared";
import MenuMobile from "./MenuMobile";

export default function HeaderSection({ leftTitle, isMobile = false }) {
  const [openMenu, setOpenMenu] = useState(false);

  const onClose = () => {
    setOpenMenu(false);
  };
  return (
    <Header>
      {isMobile ? (
        <TitleHeader>
          <Button borderColor="#001f3f" onClick={() => setOpenMenu(true)}>
            Menu <BsLayoutWtf />
          </Button>
        </TitleHeader>
      ) : (
        <TitleHeader>{leftTitle}</TitleHeader>
      )}
      <UserCircle>
        <img
          alt="logo"
          style={{ width: "100%", borderRadius: "50%" }}
          src="https://res.cloudinary.com/faceshop/image/upload/v1656062974/icon_yawawr.png"
        />
      </UserCircle>
      <MenuMobile open={openMenu} onClose={onClose} />
    </Header>
  );
}

//{leftTitle}
