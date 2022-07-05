import styled from "styled-components";

import { APP_COLORS } from "./Colors";

export const LoginContainer = styled("div")`
  width: 100%;
  height: 100vh;
  background-color: #001f3f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled("div")`
  padding: 5%;
  position: relative;
  border-radius: 10px;
  background-color: #FFF;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerInputLogin = styled("div")`
  width: 100%;
  padding: 5px;
`;
export const InputLogin = styled("Input")`
  width: 100%;
  padding: 5px;
  border: 1px solid #001f3f;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled("div")`
  padding: 5px;
  border: 1px solid #001f3f;
  text-align: center;
  width: 100%;
  margin: 10px 0px;
  border-radius: 7px;
  cursor: pointer;
  color: ${(props) => props.borderColor || "#001F3F"};
  &:hover {
    background-color: #001F3F;
    color: #FFF;
  }
`;

export const InfoEnterprise = styled("small")`
color: #FFF;
font-size: 6pt;
`;

export const Circle = styled("div")`
  position: absolute;
  top: -5vh;
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#FFF"};
`;

export const ErrorMessage = styled("p")`
color: ${APP_COLORS.RED_COLOR.color};
font-size: 8pt;
`;