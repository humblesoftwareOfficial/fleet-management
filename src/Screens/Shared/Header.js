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
          style={{ width: "100%", borderRadius: "50%" }}
          src="https://media-exp3.licdn.com/dms/image/C4D03AQE2dynYMGILcg/profile-displayphoto-shrink_400_400/0/1619950077378?e=1631145600&v=beta&t=n9c0ORzRQ5lpWQgQqBLvN5h9oFM7ud4JUl05yNhwDOM"
        />
      </UserCircle>
      <MenuMobile open={openMenu} onClose={onClose} />
    </Header>
  );
}

//{leftTitle}
