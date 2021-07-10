import styled from "styled-components";

export const ContainerVehicleList = styled("div")`
  display: flex;
  flex-flow: wrap;
`;
export const VehicleCard = styled("div")`
  width: ${(props) => (props.isWeb ? "22%" : "47%")};
  padding: 1.5%;
  overflow: hidden;
  @media (max-width: 1200px) {
    min-width: 30%;
  }
  @media (max-width: 800px) {
    min-width: 45%;
  }
  @media (max-width: 700px) {
    min-width: 99%;
  }
`;

export const BodyCardVehicle = styled("div")`
  width: 100%;
  border: 1px solid rgb(240, 243, 244);
  background-color: #d6dbe2;
  border-radius: 14px;
  height: 200px;
  cursor: pointer;
  text-align: center;
  border: ${(props) => (props["aria-selected"] ? "2px solid #399ebf" : "")};
  overflow: hidden;
  &:hover {
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  }
`;
