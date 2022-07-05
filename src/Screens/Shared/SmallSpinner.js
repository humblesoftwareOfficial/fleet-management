import React from "react";
import "../../Styling/spinner.css";

export default function SmallSpinner() {
  return (
    <div className="lds-ripple-small">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
