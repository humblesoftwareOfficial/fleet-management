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
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  border: 1px solid #001f3f;
`;

export const Button = styled("div")`
  padding: 7px;
  border: 1px solid ${(props) => props.borderColor || "#FFF"};
  font-size: 14px;
  margin: 10px 5px;
  border-radius: 7px;
  cursor: pointer;
  color: ${(props) => props.color || props.borderColor || "#001F3F"};
  &:hover {
    background-color: ${(props) => props.borderColor || "#FFF"};
    color: ${(props) => props.hoverColor || props.color || "#FFF"};
  }
`;

export const DefaultButton = styled("div")`
  padding: 7px;
  border: 1px solid #001f3f;
  background-color: #001f3f;
  color: #fff;
  font-size: 14px;
  margin: 10px 5px;
  border-radius: 7px;
  cursor: pointer;
`;

export const MenuMobileContainer = styled("div")`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255);
  overflow-x: hidden;
  transition: 0.5s;
`;

export const MenuMobileContent = styled("div")`
  position: relative;
  top: 10%;
  width: 100%;
  text-align: center;
  margin: 20px 5px 0px 5px;
`;

export const CloseMenuMobile = styled("div")`
  position: absolute;
  top: 2px;
  right: 8px;
  font-size: 60px;
`;

export const MenuItemContainer = styled("div")`
  display: flex;
  flex-flow: wrap;
`;

export const MenuItem = styled("div")`
  width: 45%;
  padding: 1.5%;
`;
export const Item = styled("div")`
  width: 100%;
  border: 1px solid #99a5b1;
  background-color: ${(props) => props.color};
  border-radius: 14px;
  height: 150px;
  cursor: pointer;
  font-weight: bold;
  color: #001f3f;
  border: ${(props) => (props["aria-selected"] ? "2px solid #399ebf" : "")};
  &:hover {
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  }
`;

export const IconItemMenu = styled("div")`
  margin: 10px;
`;
