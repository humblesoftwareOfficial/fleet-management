import styled from "styled-components";
import { APP_COLORS } from "./Colors";

export const ContainerCharts = styled("div")`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

export const ContainerChart = styled("div")`
  width: 44.3%;
  padding: 1.75%;
  margin: 1%;
  background-color: ${APP_COLORS.LIGHT_GRAY.color};
  border-radius: 7px;
  border: 1px solid #e9e3e9;

  @media (max-width: 1500px) {
    width: 44%;
  }
  @media (max-width: 1100px) {
    width: 44%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const ContainerChartMobile = styled("div")`
  width: 98%;
  padding: 1.75%;
  margin: 1%;
  background-color: white;
  border-radius: 7px;
  border: 1px solid #e9e3e9;
`;
