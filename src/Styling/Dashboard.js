import styled from "styled-components";

export const MainDashboard = styled("div")`
  height: 90%;
`;

export const MainDashboardMobile = styled("div")`
  padding: 5px;
  height: 90%;
`;

export const RecapContainer = styled("div")`
  display: flex;
  flex-flow: wrap;
`;

export const CardRecap = styled("div")`
  width: 22%;
  padding: 1.5%;
  @media (max-width: 800px) {
    min-width: 45%;
  }
  @media (max-width: 550px) {
    min-width: 99%;
  }
`;

export const CardRecapMobile = styled("div")`
  width: 47%;
  padding: 1.5%;
`;

export const BodyCard = styled("div")`
  width: 100%;
  border: 1px solid rgb(240, 243, 244);
  background-color: ${(props) => props.color};
  border-radius: 14px;
  height: 200px;
  cursor: pointer;
  border: ${(props) => (props["aria-selected"] ? "2px solid #399ebf" : "")};
  &:hover {
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  }
`;

export const HeaderCard = styled("div")`
  height: 30%;
  padding: 5px;
  font-family: Gadugi;
  text-align: right;
`;

export const ContentCard = styled("div")`
  height: 70%;
  text-align: center;
  align-items: center;
  display: block;
  font-family: Goudy Old Style;
  font-size: 56px;
  color: #f2f2f2;
`;

export const ContentCardMobile = styled("div")`
  height: 70%;
  text-align: center;
  align-items: center;
  display: block;
  font-family: Goudy Old Style;
  font-size: 46px;
  color: #f2f2f2;
`;

export const SubTitleValue = styled("div")`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-top: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ,
    Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
`;

export const Value = styled("div")`
  background-color: #001f3f;
  padding: 5px;
  color: #f2f2f2;
`;

export const CircleCard = styled("span")`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  background-color: #f2f2f2;
  display: inline-block;
  text-align: center;
`;
