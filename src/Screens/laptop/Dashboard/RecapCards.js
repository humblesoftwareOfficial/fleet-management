import React from "react";

import { APP_COLORS } from "../../../Styling/Colors";
import { RecapContainer } from "../../../Styling/Dashboard";
import CardItem from "./CardItem";

export default function RecapCards({ stats = null }) {
  return (
    <RecapContainer>
      <CardItem
        color="#F5F4F4"
        value={stats?.voters_registered || 0}
        label="Inscrits"
        icon={null}
        textColor={APP_COLORS.BLACK_COLOR.color}
      />
      <CardItem
        color={APP_COLORS.GREEN_COLOR.color}
        value={stats?.voters_count || 0}
        label="Votants"
        icon={null}
      />
      <CardItem
        color={APP_COLORS.YELLOW_COLOR.color}
        value={stats?.voters_expressed || 0}
        label="Exprimés"
        icon={null}
      />
      <CardItem
        color={APP_COLORS.RED_COLOR.color}
        value={stats?.voters_not_expressed || 0}
        label="B.Nuls"
        icon={null}
      />
    </RecapContainer>
  );
}
