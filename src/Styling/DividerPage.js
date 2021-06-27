import styled from "styled-components";

export const MainApp = styled("div")`
  width: 100%;
  background-color: #eaeaea;
  display: flex;
`;

export const LeftDashBoard = styled("div")`
  width: 260px;
  height: 100%;
  background-color: #001f3f;
  box-shadow: 20px 20px 60px #eaeaea, -20px -20px 60px #eaeaea;
  position: fixed;
`;

export const RightDashBoard = styled("div")`
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
  margin-left: 260px;
`;

export const MobileAppContainer = styled("div")`
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
`;
