import React, { useState } from "react";
import { Header, UserCircle, TitleHeader, Button } from "../../Styling/Shared";
import { BsLayoutWtf } from "react-icons/bs";
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
        <TitleHeader></TitleHeader>
      )}
      <UserCircle>
        <img style={{width: "100%", borderRadius: "50%"}}src="https://z-p3-scontent.fdkr5-1.fna.fbcdn.net/v/t1.6435-9/173604172_3744376239023976_1093248818177373925_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFv5R4fFfMAmyDsQ0NGL161r4WjbddQkXevhaNt11CRd3UoZjlKrguRYF5RWu8bs0bGsXmZXAH4nJLcMAUWUGYZ&_nc_ohc=Sp8nE0fztwYAX-FFmdB&_nc_oc=AQmLqg02sMd6S-jsgKRsPWp0IESi70Sa9sbP65dmqByLUy3fq4dSElUbnGNOOYvM5nI&_nc_ht=z-p3-scontent.fdkr5-1.fna&oh=45fa1198f24115e6efa6932037816313&oe=60DD283A" />
      </UserCircle>
      <MenuMobile open={openMenu} onClose={onClose} />
    </Header>
  );
}

//{leftTitle}
