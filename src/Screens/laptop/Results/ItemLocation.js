import React from "react";
import { APP_COLORS } from "../../../Styling/Colors";
import { ItemLocationContainer } from "../../../Styling/Repartition";

export default function ItemLocation({ region, isSelected, onPress }) {
  return (
    <ItemLocationContainer
      onClick={() => onPress(region?.code)}
      color={isSelected ? APP_COLORS.YELLOW_COLOR.color : "#DCDCDC"}
    >
      {region?.name || ""}
    </ItemLocationContainer>
  );
}
