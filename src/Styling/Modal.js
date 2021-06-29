import styled from "styled-components";

export const MainModal = styled("div")`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled("div")`
  background-color: #fefefe;
  margin: auto;
  padding: 5px;
  border: 1px solid #888;
  width: 65%;
  min-height: 250px;
  border-radius: 7px;
`;

export const CloseModal = styled("div")`
  position: absolute;
  right: 10px;
`;

export const HeaderModal = styled("div")`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  position: relative;
  margin: 0px 0px 15px 0px;
`;

export const TtileModal = styled("div")`
  font-size: 18px;
  font-weight: bold;
  width: 80%;
  margin: 10px;
  color: #001F3F;
`;

export const FooterModal = styled("div")`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: flex-end;
  margin: 0px 10px 0px 0px;
`;
