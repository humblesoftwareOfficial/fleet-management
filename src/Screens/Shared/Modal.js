import React, { useEffect, useState } from "react";
import { BsXSquareFill } from "react-icons/bs";

import { CloseModal, HeaderModal, MainModal, ModalContent, TtileModal } from "../../Styling/Modal";
import { Button, Divider } from "../../Styling/Shared";

export default function Modal({
  children,
  open,
  title = "Modal",
  onClose,
  confirmText = "",
  color,
}) {
  const [style, setStyle] = useState({ width: "0%" });

  useEffect(() => {
    open ? setStyle({ display: "block" }) : setStyle({ display: "none" });
  }, [open]);

  return (
    <MainModal style={style}>
      <ModalContent>
        <HeaderModal>
          <TtileModal>{title}</TtileModal>
          <CloseModal onClick={onClose}>
            <Button>
              <BsXSquareFill size={14} color="#E62B6F" />
            </Button>
          </CloseModal>
        </HeaderModal>
        <Divider color={color} />
        {children}
      </ModalContent>
    </MainModal>
  );
}
