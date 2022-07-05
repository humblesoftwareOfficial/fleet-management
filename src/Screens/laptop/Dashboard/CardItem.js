import React from "react";
import { CardRecap, BodyCard, HeaderCard, ContentCard, SubTitleValue, Value, CircleCard} from "../../../Styling/Dashboard";
import { formatCount } from "../../../utils";

export default function CardItem({ label, icon, value, color, isMultiple = false, textColor = "#FFF" }) {
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
          <Value style={style}>{`${formatCount(value)}`}</Value>
        <SubTitleValue textColor={textColor}>{label}</SubTitleValue>
        </ContentCard>
      </BodyCard>
    </CardRecap>
  );
}
