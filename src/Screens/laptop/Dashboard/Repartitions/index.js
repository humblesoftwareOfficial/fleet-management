import React from "react";
import { RepartitionContainer } from "../../../../Styling/Repartition";
import { getPercentagePart } from "../../../../utils";
import CardRepartition from "./CardRepartition";

export default function Repartitions({ data = [] }) {
  const renderValue = () =>
    data?.map((value, index) => (
      <CardRepartition
        value={getPercentagePart(value?.percentage * 100) || 0}
        key={value?.political_alliance?.code}
        code={value?.political_alliance?.code}
        political_alliance={value?.political_alliance}
        count={value?.count}
        expressed={value?.voters_expressed}
      />
    ));
  return <RepartitionContainer>{renderValue()}</RepartitionContainer>;
}
