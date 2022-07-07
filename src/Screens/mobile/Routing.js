import React from "react";
import { Router } from "@reach/router";
import DashBoard from "./Dashboard";
import Parc from "./Parc";
import Reservation from "./Reservation";
import Filters from "../laptop/Filters";
import Results from "../laptop/Results";

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
