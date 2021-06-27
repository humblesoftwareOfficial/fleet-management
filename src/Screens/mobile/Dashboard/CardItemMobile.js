import React from "react";
import {
  BodyCard,
  CardRecapMobile,
  CircleCard,
  ContentCardMobile,
  HeaderCard,
  SubTitleValue,
  Value,
} from "../../../Styling/Dashboard";

export default function CardItemMobile({
  label,
  icon,
  value,
  color,
  isMultiple = false,
}) {
  const style = isMultiple ? { fontSize: "30px" } : {};
  return (
    <CardRecapMobile>
      <BodyCard color={color}>
        <HeaderCard>
          <CircleCard>{icon}</CircleCard>
        </HeaderCard>
        <ContentCardMobile>
          <Value style={style}>{value}</Value>
          <SubTitleValue>{label}</SubTitleValue>
        </ContentCardMobile>
      </BodyCard>
    </CardRecapMobile>
  );
}
