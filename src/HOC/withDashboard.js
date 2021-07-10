import React, { useEffect } from "react";
import LogoApp from "../Screens/Shared/LogoApp";
import Menu from "../Screens/Shared/Menu";
import { LeftDashBoard, MainApp, RightDashBoard } from "../Styling/DividerPage";
import { FloatAdditionnals } from "../Styling/Menu";
export default function withDashboard(Component) {
  return () => {
    useEffect(() => {}, []);

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
