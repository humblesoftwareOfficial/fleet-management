import React from "react";
import { Header, UserCircle, TitleHeader } from "../../Styling/Shared";
export default function HeaderSection({ leftTitle }) {
  return (
    <Header>
      <TitleHeader></TitleHeader>
      <UserCircle></UserCircle>
    </Header>
  );
}

//{leftTitle}