import styled from "styled-components";

export const ContainerForm = styled("div")`
  display: flex;
  flex-flow: wrap;
  border-radius: 7px;
`;
export const Form = styled("div")`
  width: 100%;
`;

export const GrouPInput = styled("div")`
  margin: 10px 0px;
`;

export const TitleGroupForm = styled("div")`
  font-family: Gadugi;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
`;
export const Input = styled("input")`
  border: 1px solid rgb(240, 243, 244);
  border-radius: 7px;
  width: ${(props) => (props.isMobile ? "93%" : "43%")};
  padding: 1.5%;
  height: ${(props) => (props.isMobile ? "25px" : "7px")};
  margin: 1%;
  font-family: Gadugi;
  color: #001f3f;
  &:focus {
    outline: none;
    border-color: #001f3f;
    color: #001f3f;
    font-weight: bold;
  }
`;

export const ContainerFilter = styled("div")`
  display: flex;
`;

export const StatusReservation = styled("div")`
  position: absolute;
  right: 2px;
  background-color: ${(props) => props.color};
  border-radius: 6px;
  font-size: 12px;
  padding: 7px;
  color: white;
`;
