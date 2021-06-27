import React, { useEffect } from "react";
import { MainApp, LeftDashBoard, RightDashBoard } from "../Styling/DividerPage";
import { FloatAdditionnals } from "../Styling/Menu";
import LogoApp from "../Screens/Shared/LogoApp";
import Menu from "../Screens/Shared/Menu";
export default function withDashboard(Component) {
  return () => {
    useEffect(() => {
      
    }, []);



    return (
      <MainApp>
        <LeftDashBoard>
          <LogoApp />
          <Menu />
          <FloatAdditionnals>version beta</FloatAdditionnals>
        </LeftDashBoard>
        <RightDashBoard>
          <Component />
        </RightDashBoard>
      </MainApp>
    );
  };
}
