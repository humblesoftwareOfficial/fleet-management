import { navigate } from "@reach/router";
import React from "react";
import { ContainerLogo, Logo, TextLogo } from "../../Styling/Shared";
export default function LogoApp({ ...props }) {
  const onHomeDashboard = () => {
    navigate("/");
  };

  return (
    <ContainerLogo onClick={() => onHomeDashboard()}>
      <Logo>
        <TextLogo>AZE</TextLogo>
        {/* <AiFillCar size={24}/> */}
      </Logo>
    </ContainerLogo>
  );
}
