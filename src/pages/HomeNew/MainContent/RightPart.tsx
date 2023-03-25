import React from "react";
import heroImg from "/src/assets/heroBannerImg.svg";
import "./styles.css";
const RightPart = () => {
  return (
    <div className="heroImg">
      <img src={heroImg} className="large-image" />
    </div>
  );
};

export default RightPart;
