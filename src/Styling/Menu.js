import styled from "styled-components";

export const ContainerMenu = styled("div")`
  margin: 20px 5px;
  position: relative;
`;

export const MenuItem = styled("div")`
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: white;
    color: #4b0a50;
  }
`;

export const CotainerIcon = styled("div")`
  margin-right: 10px;
`;

export const CotainerLabel = styled("div")`
  font-weight: 500;
  letter-spacing: 0;
  font-size: 14px;
`;

export const FloatAdditionnals = styled("div")`
  position: absolute;
  bottom: 5px;
  color: white;
  left: 80px;
  font-size: 12px;
`;
