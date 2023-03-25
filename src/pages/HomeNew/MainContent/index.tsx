import React from "react";

import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const MainContent = () => {
  return (
    <div className="hero">
      <LeftPart />
      <RightPart />
    </div>
  );
};

export default MainContent;
