import React, { useEffect, useState } from "react";
import {
  CloseModal,
  FooterModal,
  HeaderModal,
  MainModal,
  ModalContent,
  TtileModal,
} from "../../Styling/Modal";
import { Button, DefaultButton, Divider } from "../../Styling/Shared";
import { BsXSquareFill } from "react-icons/bs";

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
            <Button borderColor="#E62B6F">
              <BsXSquareFill size={14}/>
            </Button>
          </CloseModal>
        </HeaderModal>
        {children}
        <FooterModal>
          <DefaultButton>
            Enregistrer
          </DefaultButton>
          <Button borderColor="#E62B6F" onClick={onClose}>
            Annuler
          </Button>
        </FooterModal>
      </ModalContent>
    </MainModal>
  );
}
