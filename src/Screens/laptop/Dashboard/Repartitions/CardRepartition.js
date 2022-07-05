/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "../../../../Styling/progressbar.scss";
import CircleProgress from "js-circle-progress";
import {
  ItemAllianceName,
  ProgressItem,
} from "../../../../Styling/Repartition";
import { formatCount } from "../../../../utils";

export default function CardRepartition({
  value = 0,
  code = "",
  political_alliance,
  count = 0,
  expressed = 0,
}) {
  useEffect(() => {
    const cp = new CircleProgress(`.progress_${code}`, {
      value,
      max: 100,
      min: 0,
      textFormat: "percent",
    });
  }, []);

  return (
    <ProgressItem>
      <div className={`progress_${code}`}></div>
      <ItemAllianceName color={political_alliance?.color}>{political_alliance?.name}</ItemAllianceName>
      <ItemAllianceName>{`${formatCount(count)}`}</ItemAllianceName>
    </ProgressItem>
  );
}
