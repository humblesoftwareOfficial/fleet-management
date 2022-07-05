import { Router } from "@reach/router";
import React from "react";

import DashBoard from "./Dashboard";
import Filters from "./Filters";
import Results from "./Results";

export default function Home({ ...props }) {
  return (
    <Router>
      <DashBoard path="/" />
      <DashBoard path="/home" />
      <DashBoard path="/dashboard" />
      <Results path="/results" />
      <Filters path="/filters" />
    </Router>
  );
}
