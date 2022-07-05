import React from "react";

import { APP_COLORS } from "../../../Styling/Colors";
import { RecapResultContainer, RecapResultLocationItem, RecapResultLocationItemLabel, SmallRecapLocationText } from "../../../Styling/Repartition";

export default function RecapResultLocations({
  region,
  department,
  commune,
  station,
}) {
  console.log({ station })
  return (
    <RecapResultContainer>
      {Boolean(region !== null && region !== undefined) && (
        <RecapResultLocationItem
          style={{
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            paddingRight: "10px",
          }}
        >
          <RecapResultLocationItemLabel>
            {region?.name}
          </RecapResultLocationItemLabel>
        </RecapResultLocationItem>
      )}
      {Boolean(department !== null && department !== undefined) && (
        <RecapResultLocationItem
          color={APP_COLORS.GREEN_COLOR.color}
          style={{
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            paddingRight: "10px",
          }}
        >
          <RecapResultLocationItemLabel>
            {department?.name}
          </RecapResultLocationItemLabel>
        </RecapResultLocationItem>
      )}
      {Boolean(commune !== null && commune !== undefined) && (
        <RecapResultLocationItem
          color={APP_COLORS.YELLOW_COLOR.color}
          style={{
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            paddingRight: "10px",
          }}
        >
          <RecapResultLocationItemLabel>
            {commune?.name}
          </RecapResultLocationItemLabel>
        </RecapResultLocationItem>
      )}
      {Boolean(station !== null && station !== undefined) && (
        <RecapResultLocationItem
          color="#001f3f"
          style={{
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            paddingRight: "10px",
          }}
        >
          <RecapResultLocationItemLabel>
            <SmallRecapLocationText>{station?.voting_location_name}</SmallRecapLocationText>
            {station?.label}
            <SmallRecapLocationText>{` Bv: ${station?.station_number}`}</SmallRecapLocationText>
          </RecapResultLocationItemLabel>
        </RecapResultLocationItem>
      )}
    </RecapResultContainer>
  );
}
