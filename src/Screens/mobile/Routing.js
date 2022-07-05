import React from "react";
import { Router } from "@reach/router";
import DashBoard from "./Dashboard";
import Parc from "./Parc";
import Reservation from "./Reservation";

export default function Home({ ...props }) {
  return (
    <Router>
      <DashBoard path="/" />
      <DashBoard path="/home" />
      <DashBoard path="/dashboard" />
      <Parc path="/parc" />
      <Reservation path="/reservation" />
    </Router>
  );
}
