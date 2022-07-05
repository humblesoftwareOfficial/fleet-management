import React from "react";
import "../../Styling/loaders.css";
import {
  LoadingContainer,
  SectionLoader,
} from "../../Styling/Loading";

export default function Loading() {
  
  return (
    <LoadingContainer>
      <SectionLoader></SectionLoader>
      <SectionLoader>
        {/* <StarLoading>
          <img src={star} alt="" style={{ width: "15%" }} />
        </StarLoading> */}
        <div className="loading">
          <div className="ldio-d6lgo59mnbi">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </SectionLoader>
      <SectionLoader></SectionLoader>
    </LoadingContainer>
  );
}
