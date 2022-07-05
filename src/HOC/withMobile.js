import React, { useEffect } from "react";
import { MainApp, MobileAppContainer } from "../Styling/DividerPage";

export default function withDashboard(Component) {
  return () => {
    useEffect(() => {
      
    }, []);
    return (
      <MainApp>
        {/* <LeftDashBoard>
          <LogoApp />
          <Menu />
          <FloatAdditionnals>version beta</FloatAdditionnals>
        </LeftDashBoard> */}
        <MobileAppContainer>
          <Component />
        </MobileAppContainer>
      </MainApp>
    );
  };
}
