import React from "react";

import defaultStyles from "./navigationHeader.module.css";

const NavigationHeader = () => {
  return (
    <div className={defaultStyles.root}>
      <span className={defaultStyles.title}>Navigation Header</span>
    </div>
  );
};

export default NavigationHeader;
