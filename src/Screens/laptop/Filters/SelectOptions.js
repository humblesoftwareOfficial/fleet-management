import React, { useCallback } from "react";

import "../../../Styling/select.css";

export default function SelectOptions({ options = [] }) {
  const renderOptions = useCallback(
    () =>
      options?.map((o, _index) => (
        // <Option key={re?.code} value={re?.code}>
        //   {re?.name}
        // </Option>
        <div class="option" key={o?.code}>
          <input class="s-c top" type="radio" name="platform" value={o?.name} />
          <input
            class="s-c bottom"
            type="radio"
            name="platform"
            value={o?.name}
          />
          <i class="fab fa-codepen"></i>
          <span class="label">{o?.name}</span>
          <span class="opt-val">{o?.name}</span>
        </div>
      )),
    [options]
  );
  return (
    <>
      <div id="info">
        Observe the platform icon's motion direction when there is up and down
        hover on options.
      </div>

      <form id="app-cover">
        <div id="select-box">
          <input type="checkbox" id="options-view-button" />
          <div id="select-button" class="brd">
            <div id="selected-value">
              <span>Select a platform</span>
            </div>
            <div id="chevrons">
              <i class="fas fa-chevron-up"></i>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div id="options">
            {renderOptions()}
            <div id="option-bg"></div>
          </div>
        </div>
      </form>
    </>
  );
}
