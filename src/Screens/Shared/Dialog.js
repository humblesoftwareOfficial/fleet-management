import React, { useEffect, useState } from "react";
import { RightSideContainer } from "../../Styling/Dialog";

export default function Dialog({ open, onClose }) {
  const [style, setStyle] = useState({ width: "0%" });

  useEffect(() => {
    open ? setStyle({ width: "30%" }) : setStyle({ width: "0%" });
  }, [open]);

  return <RightSideContainer style={style}>test</RightSideContainer>;
}
