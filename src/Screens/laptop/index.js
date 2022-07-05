import { Router } from "@reach/router";
import React from "react";

import { LaptopHomeDashboard } from "../../HOC/UseWithDashboard";
import Login from "../Shared/Login";

export default function Laptop({ ...props }) {
  return (
    <Router>
      <LaptopHomeDashboard path="/*" {...props} />
      <LaptopHomeDashboard path="/home" {...props} />
    </Router>
  );
}
