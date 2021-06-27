import React, { useState } from "react";
import { Header, UserCircle, TitleHeader, Button } from "../../Styling/Shared";
import { BsLayoutWtf } from "react-icons/bs";
import MenuMobile from "./MenuMobile";

export default function HeaderSection({ leftTitle, isMobile = false }) {
  const [openMenu, setOpenMenu] = useState(false);

  const onClose = () => {setOpenMenu(false)};
  return (
    <Header>
      {isMobile ? (
        <TitleHeader>
          <Button borderColor="#001f3f" onClick={() => setOpenMenu(true)}>
            Menu <BsLayoutWtf />
          </Button>
        </TitleHeader>
      ): (
        <TitleHeader>
          
        </TitleHeader>
      )}
      <UserCircle></UserCircle>
      <MenuMobile open={openMenu} onClose={onClose} />
    </Header>
  );
}

//{leftTitle}
