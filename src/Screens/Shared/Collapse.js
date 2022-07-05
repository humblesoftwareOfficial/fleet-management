/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";

import { BadgeStationNumber, CollapseContainer, CollapseItems, CollapseItemsLabel } from "../../Styling/Shared";

import "../../Styling/collapse.css";

export default function Collapse({ name = "", data = [], onSelectItem }) {
  const [openCollapse, setOpenCollapse] = useState(false);

  const onCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  const renderCollapseItems = useCallback(
    () =>
      data?.map((vs, _index) => (
        <CollapseItems onClick={() => onSelectItem(vs)} key={_index}>
          <CollapseItemsLabel>{vs?.label}</CollapseItemsLabel>
          <BadgeStationNumber>{vs?.station_number}</BadgeStationNumber>
        </CollapseItems>
      )),
    [data]
  );

  return (
    <CollapseContainer>
      <button
        type="button"
        className={`collapsible ${openCollapse ? "active" : "inactive"}`}
        onClick={onCollapse}
      >
        {name}
      </button>
      <div
        className="content"
        style={openCollapse ? { display: "block" } : { display: "none" }}
      >
        {renderCollapseItems()}
      </div>
    </CollapseContainer>
  );
}
