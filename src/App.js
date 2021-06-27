import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Screens from "./Screens";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/*" exact component={Screens} />
      </Switch>
    </BrowserRouter>
  );
}
