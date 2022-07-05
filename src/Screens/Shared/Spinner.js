import React from "react";
import { LoadingContainer } from "../../Styling/Loading";
import "../../Styling/spinner.css";

export default function Spinner() {
  return (
    <LoadingContainer>
      <div className="lds-ripple">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  );
}
