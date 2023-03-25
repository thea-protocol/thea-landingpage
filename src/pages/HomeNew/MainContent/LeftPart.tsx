// @ts-nocheck
import React from "react";
import LeftHighLight from "../LeftHighLight";
import Button from "../Button";
import { Link } from "react-router-dom";
import Arrow from "/src/assets/cta-white-arrow.png";

const LeftPart = () => {
  return (
    <div className="heroContent">
      <h1>Sustainability <span>As-A-Service</span></h1>
      <p>Democratizing Access to the Voluntary Carbon Market.</p>
      <LeftHighLight
        content={
          "Calculate your carbon footprint; purchase, and retire carbon credits that ensure reduction, avoidance, " +
          " removal or sequestration of carbon emissions."
        }
      />
      <Link to="/home-new/offerings?tab=0">
        <Button style={{ color: "white", cursor: "pointer" }}>
          For Individuals <img src={Arrow} alt="" />
        </Button>
      </Link>
      <LeftHighLight
        content={
          "Thea enables businesses to complement their core offering seamlessly with a sustainability" +
          " experience that includes carbon footprint accounting and end user positive climate action driving brand loyalty through rewards."
        }
      />
      <Link to="/home-new/offerings?tab=1">
        <Button style={{ color: "white", cursor: "pointer" }}>
          For Businesses <img src={Arrow} alt="" />
        </Button>
      </Link>
    </div>
  );
};

export default LeftPart;
