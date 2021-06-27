import styled from "styled-components";

export const ContainerList = styled("div")`
  padding: 20px;
  font-family: Gadugi;
`;

export const TitleList = styled("div")`
  font-family: Gadugi;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0px;
  text-align: center;
`;

export const HeaderList = styled("div")`
  background-color: #9ABCE3;
  border-radius: 14px;
  margin: 20px 0px;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const RowList = styled("div")`
  background-color: #CDD3DA;
  border-radius: 14px;
  margin: 20px 0px;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  &:hover {
    background-color: #FFF;
    cursor: pointer;
  }
`;

export const ColumnList = styled("div")`
  background-color: #8DB6E5;
  border-radius: 7px;
  padding: 2px;
  margin: 0px 10px;
  width: 20%;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color: #4b0a50;
`;

export const ContainerColumnData = styled("div")`
  
`;

export const ColumnListData = styled("div")`
  background-color: #C7D0DA;
  border-radius: 7px;
  padding: 2px;
  margin: 0px 10px;
  width: 20%;
  text-align: center;
  font-size: 14px;
  color: #4b0a50;
`;
