import styled from "styled-components";

export const RightSideContainer = styled("div")`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255);
  overflow-x: hidden;
  transition: 0.5s;
  background-size: cover;
`;

export const CloseDialog = styled("div")`
  position: absolute;
  right: 10px;
  top: 5px;
`;

export const CloseButtonDialog = styled("div")`
  border-radius: 5px;
  border: 1px solid red;
  color: red;
  cursor: pointer;
  padding: 5px;
  font-size: 12px;
  &:hover {
    background-color: red;
    color: white;
  }
`;
