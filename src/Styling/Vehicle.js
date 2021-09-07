import styled from "styled-components";

export const ContainerVehicleList = styled("div")`
  display: flex;
  flex-flow: wrap;
  over-flow: hidden;
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

export const VehicleDetails = styled("div")`
  width: 100%;
  margin-top: 35px;
  font-family: Gadugi;
`;

export const HeaderDetailsVehicle = styled("div")`
  width: 100%;
  padding: 5px;
`;

export const TopHeaderVehicleDetails = styled("div")`
  width: 100%;
  text-align: center;
`;

export const IconCircleDetails = styled("span")`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.color || "#D6DBE2"};
  display: inline-block;
  text-align: center;
`;

export const ContainerDetailsVehicle = styled("div")`
  margin: 5px;
  padding: 10px;
  text-align: center;
  justify-content: center;
`;

export const ItemDetailsVehicle = styled("div")`
  padding: 5px;
  color: #fff;
  background-color: #001f3f;
  cursor: pointer;
  border-radius: 5px;
  margin: 0px 0px 10px 0px;
`;

export const RecapDetailsVehicle = styled("div")`
  text-align: left;
  font-size: 14px;
  margin: 20px 0px;
  // border-bottom: 1px solid #001f3f;
`;

export const FooterDetailsVehicle = styled("div")`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
`;
