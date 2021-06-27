import React from "react";
import { ContainerLogo, Logo, TextLogo } from "../../Styling/Shared";
import { AiFillCar } from "react-icons/ai";
import { navigate } from "@reach/router";
export default function LogoApp({ ...props }) {

  const onHomeDashboard = () => {
    navigate("/");
  }
  
  return (
    <ContainerLogo onClick={() => onHomeDashboard()}>
      <Logo>
        <TextLogo>PALLEN AUTO</TextLogo>
        <AiFillCar size={24}/>
      </Logo>
    </ContainerLogo>
  );
}
