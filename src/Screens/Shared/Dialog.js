import React, { useEffect, useState } from "react";
import {
  CloseButtonDialog,
  CloseDialog,
  RightSideContainer,
} from "../../Styling/Dialog";

export default function Dialog({ open, children, onClose }) {
  const [style, setStyle] = useState({ width: "0%" });

  useEffect(() => {
    open ? setStyle({ width: "30%" }) : setStyle({ width: "0%" });
  }, [open]);

  return (
    <RightSideContainer style={style}>
      <CloseDialog>
        <CloseButtonDialog onClick={onClose}>Fermer</CloseButtonDialog>
      </CloseDialog>
      {children}
    </RightSideContainer>
  );
}
