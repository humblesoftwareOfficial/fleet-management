import React from "react";
import { CardRecap, BodyCard, HeaderCard, ContentCard, SubTitleValue, Value, CircleCard} from "../../../Styling/Dashboard";

export default function CardItem({ label, icon, value, color, isMultiple = false }) {
  const style = isMultiple ? {fontSize: "36px"} : {}
  return (
    <CardRecap>
      <BodyCard color={color}>
        <HeaderCard>
        <CircleCard>
          {icon}
        </CircleCard>
        </HeaderCard>
        <ContentCard>
          <Value style={style}>{value}</Value>
        <SubTitleValue>{label}</SubTitleValue>
        </ContentCard>
      </BodyCard>
    </CardRecap>
  );
}
