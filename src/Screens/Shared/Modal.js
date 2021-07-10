import React, { useEffect, useState } from "react";
import { BsXSquareFill } from "react-icons/bs";
import {
  CloseModal,
  FooterModal,
  HeaderModal,
  MainModal,
  ModalContent,
  TtileModal,
} from "../../Styling/Modal";
import { Button, DefaultButton, Divider } from "../../Styling/Shared";

export default function Modal({ children, open, title = "Modal", onClose }) {
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
        <Divider />
        {children}
        <Divider />
        <FooterModal>
          <DefaultButton>Enregistrer</DefaultButton>
          <Button borderColor="#E62B6F" onClick={onClose}>
            Annuler
          </Button>
        </FooterModal>
      </ModalContent>
    </MainModal>
  );
}
