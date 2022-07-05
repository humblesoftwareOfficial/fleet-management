import styled from "styled-components";

import { APP_COLORS } from "./Colors";

export const RepartitionContainer = styled("div")`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin: 10px;
`;

export const ProgressItem = styled("div")`
  text-align: center;
`;

export const ItemAllianceName = styled("div")`
  text-align: center;
  padding: 5px;
  background-color: ${(props) => props.color || "#590381"};
  border-radius: 10px;
  color: #fff;
  font-size: 8pt;
  margin-bottom: 5px;
`;

export const GlobalLocationContainer = styled("div")`
  display: flex;
`;

export const LocationContainer = styled("div")`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 10px;
  border: 1px solid ${APP_COLORS.PRIMARY_COLOR.color};
  background-color: #fff;
  border-radius: 10px;
  width: 50%;
  align-items: center;
  align-content: center;
`;

export const ItemLocationContainer = styled("div")`
  text-align: center;
  margin: 10px;
  padding: 5px;
  background-color: ${(props) => props.color || "#DCDCDC"};
  border-radius: 10px;
  color: #001f3f;
  font-size: 8pt;
  margin-bottom: 5px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #ffdc00;
    color: #001f3f;
  }
`;

export const RecapResultContainer = styled("div")`
  width: 100%;
  padding: 10px;
  display: flex;
  background: #EEF7FF;
`;

export const RecapResultLocationItem = styled("div")`
  padding: 5px;
  margin: 10px;
  background-color: ${(props) => props.color || APP_COLORS.PRIMARY_COLOR.color};
 
`;

export const RecapResultLocationItemLabel = styled("div")`
  color: ${(props) => props.color || "#FFF"};
`;

export const SmallRecapLocationText = styled("small")`
font-size: 9pt;
`;