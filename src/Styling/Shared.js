import styled from "styled-components";

export const ContainerLogo = styled("div")`
  padding: 5%;
  justify-content: center;
`;
export const Logo = styled("div")`
  text-align: center;
  padding: 5%;
  border-radius: 14px;
  background: #001f3f;
  color: white;

  cursor: pointer;
  &:hover {
    background-color: white;
    color: #4b0a50;
  }
`;

//box-shadow: -5px -5px 100px #7d7d7d, 5px 5px 100px transparent;

export const TextLogo = styled("p")`
  font-size: 2vh;
  font-weight: bold;
  word-wrap: break-word;
`;

export const Divider = styled("hr")`
  border: 1px solid white;
  background: white;
`;

export const FineDivider = styled("hr")`
  border: 0.5px solid white;
  background: white;
`;

export const ContainerSection = styled("div")`
  background-color: #f2f2f2;
`;

export const Header = styled("div")`
  border-radius: 14px;
  padding: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
//box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
//  background-color: #dde6f0;
export const TitleHeader = styled("div")`
  font-family: Gadugi;
  font-size: 19px;
`;
export const UserCircle = styled("span")`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  background-color: #001f3f;
  display: inline-block;
`;

export const Button = styled("div")`
  padding: 7px;
  border: 1px solid #FFF;
  font-size: 14px;
  margin: 10px 5px;
  border-radius: 7px;
  cursor: hover;
  &:hover {
    background-color: #fff;
    color: #001F3F;
  }
`;
