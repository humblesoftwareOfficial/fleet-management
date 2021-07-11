import styled from "styled-components";

export const ContainerDayLocation = styled("div")`
  background-color: white;
  border-radius: 7px;
  border: 1px solid #e9e3e9;
  padding: 1.75%;
  margin: 1%;
  display: flex;
  flex-flow: wrap;
`;

export const ContainerLocations = styled("div")`
  margin: 1%;
  display: flex;
  flex-flow: wrap;
  background-color: white;
  border: 1px solid #a6a5a8;
  border-radius: 5px;
`;

export const ContainerDayLocationMobile = styled("div")`
  background-color: white;
  border-radius: 7px;
  border: 1px solid #e9e3e9;
  padding: 1.75%;
  display: flex;
  flex-flow: wrap;
`;

export const TitleDayLocation = styled("div")`
  width: 100%;
  text-align: center;
`;

export const CardRecapLocation = styled("div")`
  width: 22%;
  padding: 1.5%;
  @media (max-width: 800px) {
    min-width: 45%;
  }
  @media (max-width: 550px) {
    min-width: 99%;
  }
`;

export const CardRecapLocationMobile = styled("div")`
  width: 97%;
  padding: 1.5%;
  margin-bottom: 12px;
`;

export const BodyCardRecapLocation = styled("div")`
  width: 100%;
  border: 1px solid rgb(240, 243, 244);
  background-color: #e9eaea;
  border-radius: 14px;
  height: 200px;
  cursor: pointer;
  border: ${(props) => (props["aria-selected"] ? "2px solid #399ebf" : "")};
  &:hover {
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  }
`;

export const BodyCardRecapLocationMobile = styled("div")`
  width: 100%;
  border: 1px solid rgb(240, 243, 244);
  background-color: #e9eaea;
  border-radius: 14px;
  height: 200px;
  cursor: pointer;
  border: ${(props) => (props["aria-selected"] ? "2px solid #399ebf" : "")};
  &:hover {
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  }
`;

export const HeaderCardRecapLocation = styled("div")`
  height: 50%;
  font-family: Gadugi;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 5px;
  position: relative;
`;

export const FooterCardRecapLocation = styled("div")`
  height: 46%;
  text-align: center;
  align-items: center;
  font-family: Gadugi;
  color: #f2f2f2;
  background-color: #001f3f;
  border-radius: 14px;
  padding: 2%;
  position: relative;
`;

export const VehicleDescription = styled("div")`
  font-size: 14px;
  margin: 5px;
`;

export const UserDescription = styled("div")`
  font-size: 14px;
  margin: 5px;
  color: white;
`;

export const IconCircle = styled("span")`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.color || "#FFF"};
  display: inline-block;
  text-align: center;
`;
