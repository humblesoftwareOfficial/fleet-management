import styled from "styled-components";

export const StepperContainer = styled("div")`
  padding: 50px;
  min-height: 500px;
  position: relative;
`;

export const HeaderStepper = styled("div")`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const LabelStep = styled("div")`
  flex: 1;
  position: relative;
  text-align: center;
`;

export const DotStep = styled("span")`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  background-color: #001f3f;
  display: inline-block;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  border: 1px solid #001f3f;
  color: white;
  cursor: pointer;
`;
export const NameStep = styled("div")`
  font-size: 14px;
  margin: 5px 0px;
  color: #aba6b1;
`;

export const FooterStep = styled("div")`
  display: flex;
  justify-content: center;
`;
